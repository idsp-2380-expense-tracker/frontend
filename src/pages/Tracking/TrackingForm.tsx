import { OnBackProps } from "../../interfaces/uiProps";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Group, Menu, UnstyledButton } from "@mantine/core";
import classes from "./Tracking.module.scss";
// Image Source
import leftArrow from "../../assets/left_arrow_2.svg";
import barcodeIcon from "../../assets/barcode_icon_white.svg";
import handUpYellowIcon from "../../assets/hand_arrow_up_yellow.svg";
import handDownGreyIcon from "../../assets/hand_arrow_down_grey.svg";

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

export default function TrackingForm({ onBack }: OnBackProps) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(categoryData[0]);
  const items = categoryData.map((item) => (
    <Menu.Item
      // leftSection={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <div className="trans-spendings">
      <section id="trans-header">
        <img
          className="back-btn"
          src={leftArrow}
          alt="Back button"
          onClick={onBack}
        />
        <h2>ADD TRANSACTION</h2>
        <img src={barcodeIcon} alt="Barcode icon" />
      </section>
      <section id="trans-btn">
        <div id="trans-spendings-btn">
          <div id="spendings-earnings-btn">
            <h3>Spendings</h3>
            <img src={handUpYellowIcon} alt="Spendings icon" />
          </div>

          <hr id="trans-underline" />
        </div>

        <div id="trans-earnings-btn">
          <div id="spendings-earnings-btn">
            <h3>Earnings</h3>
            <img src={handDownGreyIcon} alt="Earnings icon" />
          </div>

          <hr id="trans-underline" />
        </div>
      </section>
      <section id="trans-category"></section>
      <Menu
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        radius="md"
        width="target"
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton
            className={classes.control}
            data-expanded={opened || undefined}
          >
            <Group gap="xs">
              {/* <Image src={selected.image} w={22} h={22} /> */}
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>
    </div>
  );
}
