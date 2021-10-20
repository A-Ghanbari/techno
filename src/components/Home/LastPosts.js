import classes from "./Home.module.scss";
import Link from "next/link";
import { Col, Row } from "antd";

export default function LastPosts({ items }) {
  return (
    <>
      <div className={classes.bg}>
        <h1> دیجی میجی مرجع اخبار فناوری </h1>
      </div>
      <div className={classes.lastPost}>
        <h1>آخرین مطالب</h1>
        <Row>
          <Col style={{ padding: "5px" }} span={12}>
            {items.slice(1, 5).map((post) => {
              // if (post.fields.category.fields.category === "لپ تاپ") {
              return (
                <Link href={`/${post.sys.id}`}>
                  <a>
                    <Col
                      style={{
                        display: "inline-block",
                        width: "100%",
                        height: "50%",
                      }}
                      span={12}
                      key={post.sys.id}
                    >
                      <img
                        width="100%"
                        height="100%"
                        src={post.fields.image.fields.file.url}
                      />
                      <h3>{post.fields.title}</h3>
                    </Col>
                  </a>
                </Link>
              );
              // }
            })}
          </Col>

          <Col
            style={{ display: "inline-block", width: "100%" }}
            span={12}
            key={items[0].sys.id}
          >
            <Link href={`${items[0].sys.id}`}>
              <a>
                <img
                  width="100%"
                  height="100%"
                  src={items[0].fields.image.fields.file.url}
                />
                <h3 style={{ fontSize: "20px" }}>{items[0].fields.title}</h3>
              </a>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
