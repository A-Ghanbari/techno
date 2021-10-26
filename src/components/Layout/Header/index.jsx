import React from "react";
import { Layout, Menu } from "antd";
import classes from "../Layout.module.scss";
import Link from "next/link";

// import { GiArtificialIntelligence } from "react-icons/gi";
import { BiGame, BiMobileAlt } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { FaLaptop, FaMobileAlt, FaHome, FaRobot } from "react-icons/fa";
import { SiMinds } from "react-icons/si";

const { Header } = Layout;

export default function Headerr() {
  return (
    <Header className={classes.root}>
      <div className={classes.logo} />

      <Menu theme="dark" className={classes.menu} mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">
            <a>
              <FaHome className={classes.icon} />
              خانه
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/mobile">
            <a>
              <BiMobileAlt className={classes.icon} />
              موبایل
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link href="/laptop">
            <a>
              <FaLaptop className={classes.icon} />
              لپ تاپ
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/game">
            <a>
              <BiGame className={classes.icon} />
              بازی
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/ai">
            <a>
              <FaRobot className={classes.icon} />
              هوش مصنوعی
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/application">
            <a>
              <AiFillAppstore className={classes.icon} />
              نرم افزار
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="7" className={classes.about}>
          <Link href="/about">درباره ما</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
