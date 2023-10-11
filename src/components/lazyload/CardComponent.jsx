import { useEffect, useState } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
import { cardData } from "./mock";

export default function CardComponent() {
  const [data, setData] = useState(cardData);
  console.log("data", cardData);

  const totalItem = 20;

  useEffect(() => {
    setData(cardData);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const loading = async () => {
    const newCardData = [
      {
        title: "New card title",
        buttonName: "right",
        description: "this is an infinite scroll",
      },
      {
        title: "New card title",
        buttonName: "right",
        description: "this is an infinite scroll",
      },
      {
        title: "New card javad",
        buttonName: "right",
        description: "this is an infinite scroll",
      },
    ];
    if (data.length <= totalItem) {
      await setData((data) => [...data, ...newCardData]);
    }

    console.log("load more");
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={loading}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            card Loading ...
          </div>
        }
      >
        <Row>
          {data &&
            data.map((data, index) => (
              <Col md={4} key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1652512456007-e16ac46f1879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
                  />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="primary">{data.buttonName}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
