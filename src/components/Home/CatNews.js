import { Col, Row, Card } from "antd";
import classes from "./Home.module.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
]);

export default function CatNews({ items }) {
  return (
    <>
      <div className={classes.catBg} />
      <div className={classes.catNews}>
        <Row justify="space-between">
          <Col className={classes.game} xs={24} md={12}>
            <h1>جدیدترین اخبار دنیای بازی</h1>
            <Swiper
              dir="rtl"
              slidesPerView={3}
              navigation={{ clickable: true }}
              pagination={{ clickable: true }}
              navigation={false}
              pagination={false}
              speed={2000}
              autoplay={{
                delay: 1000,
              }}
            >
              {items.map((post) => {
                if (post.fields.category.fields.category === "بازی") {
                  return (
                    <SwiperSlide key={post.sys.id} style={{ padding: 20 }}>
                      <Link href={`/${post.sys.id}`}>
                        <a>
                          <Card
                            className={classes.card}
                            style={{ width: "100%" }}
                            hoverable
                            cover={
                              <img src={post.fields.image.fields.file.url} />
                            }
                          >
                            <h4>{post.fields.title}</h4>
                          </Card>
                        </a>
                      </Link>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </Col>
          <Col className={classes.ai} sx={24} md={12}>
            <h1> هوش مصنوعی</h1>

            <Swiper
              dir="ltr"
              slidesPerView={3}
              navigation={{ clickable: true }}
              pagination={{ clickable: true }}
              navigation={false}
              pagination={false}
              speed={1000}
              autoplay={{
                delay: 2000,
              }}
            >
              {items.map((post) => {
                if (post.fields.category.fields.category === "هوش مصنوعی") {
                  return (
                    <SwiperSlide key={post.sys.id} style={{ padding: 20 }}>
                      <Link href={`/${post.sys.id}`}>
                        <a>
                          <Card
                            className={classes.card}
                            style={{ width: "100%" }}
                            hoverable
                            cover={
                              <img src={post.fields.image.fields.file.url} />
                            }
                          >
                            <h4>{post.fields.title}</h4>
                          </Card>
                        </a>
                      </Link>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </Col>
        </Row>
      </div>
      <div className={classes.mobile}>
        <div className={classes.catBg2}>
          <h1> موبایل و لپتاپ</h1>
        </div>
        <Swiper
          dir="rtl"
          slidesPerView={6}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          navigation={false}
          pagination={false}
          speed={2000}
          autoplay={{
            delay: 1000,
          }}
        >
          {items.map((post) => {
            if (
              post.fields.category.fields.category === "موبایل" ||
              post.fields.category.fields.category === "لپ تاپ"
            ) {
              return (
                <SwiperSlide key={post.sys.id} style={{ padding: 20 }}>
                  <Link href={`/${post.sys.id}`}>
                    <a>
                      <Card
                        className={classes.card}
                        style={{ width: "100%" }}
                        hoverable
                        cover={<img src={post.fields.image.fields.file.url} />}
                      >
                        <h4>{post.fields.title}</h4>
                      </Card>
                    </a>
                  </Link>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </>
  );
}
