import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { Slider, Text, Box, Button } from "@mantine/core";
// Image Sources
import walletIcon from "../../assets/wallet_icon.svg";

interface TrackingDrawerProps {
  expanded: boolean;
  onToggle: () => void;
  selectedDate: Date | null;
}

export default function TrackingDrawer({
  expanded,
  onToggle,
  selectedDate,
}: TrackingDrawerProps) {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

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
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {selectedDate ? selectedDate.toDateString() : ""}
        </h3>
      </div>

      <Box maw={400} mx="auto" className="box-size">
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
      </Box>

      <Box className="box-item">
        <hr />
        <div id="spending-title">
          <h3>Food</h3>
          <h3>$-23</h3>
        </div>

        <div className="tag-payment">
          <div id="tag-btn">
            <Button className="tag-types" size="compact-md">
              <span>Spending</span>
            </Button>
            <Button className="tag-category" size="compact-md">
              <span>Food</span>
            </Button>
          </div>

          <div id="credit-debit-cash">
            <h3>Credit</h3>
            <img src={walletIcon} alt="Wallet icon" />
          </div>
        </div>

        <h3 id="spending-note">Note: -</h3>
      </Box>

      <Box className="box-item">
        <hr />
        <div id="spending-title">
          <h3>Food</h3>
          <h3>$-23</h3>
        </div>

        <div className="tag-payment">
          <div id="tag-btn">
            <Button className="tag-types" size="compact-md">
              <span>Spending</span>
            </Button>
            <Button className="tag-category" size="compact-md">
              <span>Food</span>
            </Button>
          </div>

          <div id="credit-debit-cash">
            <h3>Credit</h3>
            <img src={walletIcon} alt="Wallet icon" />
          </div>
        </div>

        <h3 id="spending-note">Note: -</h3>
      </Box>
    </SwipeableDrawer>
  );
}
