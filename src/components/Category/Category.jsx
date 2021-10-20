import { Col, Row } from "antd";
import classes from "./Category.module.scss";
import Link from "next/link";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default function Category({ items, cat }) {
  return (
    <>
      <div className={classes.bg}>
        <h1>{cat}</h1>
      </div>
      <div style={{ padding: "0 50px" }}>
        {items.map((post) => {
          if (post.fields.category.fields.category === cat) {
            return (
              <Row
                justify="space-between"
                className={classes.card}
                key={post.sys.id}
              >
                <Col xs={24} md={8}>
                  <Link href={`/${post.sys.id}`}>
                    <a>
                      <img src={post.fields.image.fields.file.url} />
                    </a>
                  </Link>
                </Col>
                <Col xs={24} md={15}>
                  <Link href={`/${post.sys.id}`}>
                    <a>
                      <h1>{post.fields.title}</h1>
                    </a>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(post.fields.overview),
                    }}
                  />
                </Col>
              </Row>
            );
          }
        })}
      </div>
    </>
  );
}
