import { Box, Button } from "@mantine/core";
import { SwipeableDrawer } from "@mui/material";
// Image Source
import walletIcon from "../../assets/wallet_icon.svg";
import { DB_Tracking } from "../../interfaces/dbStructure";

interface TrackingDrawerProps {
  expanded: boolean;
  onToggle: () => void;
  selectedDate: Date | null;
  data: DB_Tracking[];
  onEdit: (item: DB_Tracking) => void;
}

export default function TrackingDrawer({
  expanded,
  onToggle,
  selectedDate,
  data,
  onEdit,
}: TrackingDrawerProps) {
  // const [value, setValue] = useState(50);
  // const [endValue, setEndValue] = useState(50);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={true}
      hideBackdrop
      disableSwipeToOpen
      onClose={() => {}}
      onOpen={() => {}}
      slotProps={{
        paper: {
          className: expanded
            ? "tracking-drawer expanded"
            : "tracking-drawer collapsed",
        },
      }}
    >
      <div className="tracking-drawer-content">
        <div className="drawer-handle">
          <div id="handle-bar" onClick={onToggle}></div>
        </div>
        <h3
          style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "3rem" }}
        >
          {selectedDate ? selectedDate.toDateString() : ""}
        </h3>
      </div>

      {/* <Box maw={400} mx="auto" className="box-size">
        <Slider
          color="#9150F5"
          size={15}
          radius={5}
          value={value}
          onChange={setValue}
          onChangeEnd={setEndValue}
        />
        <Box className="value-box">
          <Text className="value-types" mt="md" size="xl">
            <b>${value}</b>
            <span>Spendings</span>
          </Text>
          <Text className="value-types" mt="md" size="xl">
            <b>${endValue}</b>
            <span>Earnings</span>
          </Text>
        </Box>
      </Box> */}

      {data.map((item) => (
        <Box className="box-item" key={item.id}>
          <hr />
          <div id="spending-title">
            <h3>{item.category}</h3>
            <h3>${item.amount}</h3>
            <button
              id="edit-btn"
              onClick={() => onEdit(item)}
              style={{ cursor: "pointer" }}
            >
              Edit
            </button>
          </div>
          <div className="tag-payment">
            <div id="tag-btn">
              <Button className="tag-types" size="compact-md">
                <span>{item.repeat ? "Repeating" : "Spending"}</span>
              </Button>
              <Button className="tag-category" size="compact-md">
                <span>{item.category}</span>
              </Button>
            </div>
            <div id="credit-debit-cash">
              <h3>{item.paymentMethod}</h3>
              <img src={walletIcon} alt="Wallet icon" />
            </div>
          </div>
        </Box>
      ))}
    </SwipeableDrawer>
  );
}
