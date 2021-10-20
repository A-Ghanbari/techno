import React from "react";
import { Layout, Menu } from "antd";
import classes from "../Layout.module.scss";
import Link from "next/link";

const { Header } = Layout;

export default function Headerr() {
  return (
    <Header className={classes.root}>
      <div className={classes.logo} />

      <Menu theme="dark" className={classes.menu} mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">خانه</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/mobile">موبایل</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link href="/laptop">لپ تاپ</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/game">بازی </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/AI">هوش مصنوعی</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/application">نرم افزار</Link>
        </Menu.Item>
        <Menu.Item key="7" className={classes.about}>
          <Link href="/about">درباره ما</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
