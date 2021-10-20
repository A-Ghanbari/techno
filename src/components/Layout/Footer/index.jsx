import { Col, Row } from "antd";
import React from "react";
import classes from "../Layout.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Row justify="space-around">
        <Col xs={24} md={7}>
          <ul>
            <Link href="/AI">
              <a>
                <li>هوش مصنوعی</li>
              </a>
            </Link>
            <Link href="/game">
              <a>
                <li>بازی</li>
              </a>
            </Link>
            <Link href="/application">
              <a>
                <li>نرم افزار</li>
              </a>
            </Link>
          </ul>
        </Col>
        <Col xs={24} md={7}>
          <ul>
            <Link href="/mobile">
              <a>
                <li>موبایل </li>
              </a>
            </Link>
            <Link href="/laptop">
              <a>
                <li>لپ تاپ</li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li> درباره ما</li>
              </a>
            </Link>
          </ul>
        </Col>
        <Col xs={24} md={7}>
          <div className={classes.footerbg} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p>
            © هر گونه کپی‌برداری جزئی یا کلی از مطالب دیجی میجی مشکلی ندارد .
            حقوق این سایت به علی و حامد تعلق دارد.
          </p>
        </Col>
      </Row>
    </div>
  );
}
