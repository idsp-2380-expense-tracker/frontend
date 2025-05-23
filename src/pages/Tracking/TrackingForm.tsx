import {
  Button,
  Checkbox,
  Group,
  Menu,
  NumberInput,
  UnstyledButton,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconChevronDown } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import classes from "./Tracking.module.scss";
// Image Source
// import barcodeIcon from "../../assets/barcode_icon_white.svg";
// import handDownGreyIcon from "../../assets/hand_arrow_down_grey.svg";
import handUpYellowIcon from "../../assets/hand_arrow_up_yellow.svg";
import leftArrow from "../../assets/left_arrow_2.svg";
import { DB_Tracking } from "../../interfaces/dbStructure";
import { trackingService } from "../../services/trackingService";

interface TrackingFormProps {
  onBack: () => void;
  editItem?: DB_Tracking | null;
  initialDate?: Date | null;
  onDateChange?: (date: string | null) => void;
}

const categoryData = [
  { label: "Food" },
  { label: "Clothing" },
  { label: "Groceries" },
  { label: "Transit" },
  { label: "Entertainment" },
  { label: "Education" },
  { label: "Rent" },
  { label: "Bills" },
  { label: "Investment" },
];

const paymentOptions = [{ label: "Cash" }, { label: "Card" }];

export default function TrackingForm({
  onBack,
  editItem,
  initialDate,
  onDateChange,
}: TrackingFormProps) {
  const [categoryMenuOpened, setCategoryMenuOpened] = useState(false);
  const [paymentMenuOpened, setPaymentMenuOpened] = useState(false);
  const [selected, setSelected] = useState(
    categoryData.find((c) => c.label === editItem?.category) ?? categoryData[0]
  );
  const [selectedPayment, setSelectedPayment] = useState(
    paymentOptions.find((p) => p.label === editItem?.paymentMethod) ??
      paymentOptions[0]
  );
  const [checked, setChecked] = useState(editItem?.repeat ?? false);
  const [date, setDate] = useState<string | null>(
    editItem?.dateOfPayment ??
      (initialDate ? dayjs(initialDate).format("YYYY-MM-DD") : null)
  );
  const [amount, setAmount] = useState<number>(editItem?.amount ?? 0);

  useEffect(() => {
    if (date) {
      onDateChange?.(date);
    }
  }, [date, onDateChange]);

  useEffect(() => {
    if (!editItem) return;

    setSelected(
      categoryData.find((c) => c.label === editItem.category) ?? categoryData[0]
    );
    setSelectedPayment(
      paymentOptions.find((p) => p.label === editItem.paymentMethod) ??
        paymentOptions[0]
    );
    setChecked(editItem.repeat);
    setDate(editItem.dateOfPayment ?? null);
    setAmount(editItem.amount);
  }, [editItem]);

  const isValid = amount > 0 && !!date;

  const categoryItems = categoryData.map((item) => (
    <Menu.Item onClick={() => setSelected(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  const paymentItems = paymentOptions.map((item) => (
    <Menu.Item onClick={() => setSelectedPayment(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!isValid) return;
        await trackingService.saveTrackingData({
          id: editItem?.id ?? 0,
          category: selected.label,
          paymentMethod: selectedPayment.label,
          amount,
          dateOfPayment: date ?? undefined,
          repeat: checked,
        });
        onDateChange?.(date);
        onBack();
      }}
    >
      <div className="trans-spendings">
        <section id="trans-header">
          <img
            className="back-btn"
            src={leftArrow}
            alt="Back button"
            style={{ cursor: "pointer" }}
            onClick={onBack}
          />

          <h2>{editItem ? "EDIT TRANSACTION" : "ADD TRANSACTION"}</h2>
          {/* <img
            src={barcodeIcon}
            alt="Barcode icon"
            style={{ cursor: "pointer" }}
          /> */}
        </section>

        <section id="trans-btn">
          <div id="trans-spendings-btn">
            <div id="spendings-earnings-btn">
              <h3>Spendings</h3>
              <img src={handUpYellowIcon} alt="Spendings icon" />
            </div>

            <hr id="trans-underline" />
          </div>

          {/* <div id="trans-earnings-btn">
            <div id="spendings-earnings-btn">
              <h3>Earnings</h3>
              <img src={handDownGreyIcon} alt="Earnings icon" />
            </div>

            <hr id="trans-underline" />
          </div> */}
        </section>

        <section id="trans-category">
          <h4>Category</h4>
          <Menu
            onOpen={() => setCategoryMenuOpened(true)}
            onClose={() => setCategoryMenuOpened(false)}
            radius="md"
            width="target"
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={classes.control}
                data-expanded={categoryMenuOpened || undefined}
              >
                <Group gap="xs">
                  <span className={classes.label}>{selected.label}</span>
                </Group>
                <IconChevronDown
                  size={16}
                  className={classes.icon}
                  stroke={1.5}
                />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{categoryItems}</Menu.Dropdown>
          </Menu>
        </section>

        <section id="payment-amount">
          <div id="payment-method">
            <h4>Payment Method</h4>
            <Menu
              onOpen={() => setPaymentMenuOpened(true)}
              onClose={() => setPaymentMenuOpened(false)}
              radius="md"
              width="target"
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  className={classes.control}
                  data-expanded={paymentMenuOpened || undefined}
                >
                  <Group gap="xs">
                    <span className={classes.label}>
                      {selectedPayment.label}
                    </span>
                  </Group>
                  <IconChevronDown
                    size={16}
                    className={classes.icon}
                    stroke={1.5}
                  />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>{paymentItems}</Menu.Dropdown>
            </Menu>
          </div>

          <div id="amount">
            <h4>Amount (CAD $)</h4>
            <NumberInput
              value={amount}
              onChange={(value) => setAmount(Number(value) ?? 0)}
              placeholder="Amount"
              mt="md"
              min={0.01}
              // onClick={() =>
              //   apiRequest().then((values) => form.initialize(values))
              // }
            />
          </div>
        </section>

        <section id="date-payment">
          <h4>Date of Payment</h4>
          <DateInput
            clearable
            value={date}
            onChange={setDate}
            valueFormat="YYYY-MM-DD"
            placeholder="Date input"
            firstDayOfWeek={0}
          />
          <br />
          <div id="repeat-payment">
            <Checkbox
              label="Repeating Payment (Rent, Bills, etc...)"
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
          </div>
        </section>
        <hr />

        <div id="trans-btns">
          <Button
            id="add-trans-btn"
            type="submit"
            className="spending-add"
            disabled={!isValid}
          >
            {editItem ? "Update" : "Add"}
          </Button>
          {editItem && (
            <Button
              id="delete-trans-btn"
              className="spending-add"
              onClick={async () => {
                await trackingService.deleteTrackingData({
                  id: -1,
                  idForDelete: editItem.id,
                });
                onBack();
              }}
            >
              DELETE
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
