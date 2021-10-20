import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Col, Row } from "antd";
import classes from "./SinglePage.module.scss";

export default function SinglePage({ fields }) {
  return (
    <>
      <Row className={classes.card}>
        <Col xs={24} md={12}>
          <img src={fields.image.fields.file.url} />
        </Col>
        <Col xs={24} md={12}>
          <h1>{fields.title}</h1>
        </Col>
        <Col span={24}>
          {" "}
          <div
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(fields.content),
            }}
          />
        </Col>
      </Row>
    </>
  );
}
