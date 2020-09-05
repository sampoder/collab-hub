import Head from "next/head";
import {
  Button,
  Page,
  Text,
  Card,
  Note,
  Code,
  Tag,
  Link,
  Image,
  Divider,
  Spacer,
  Tabs,
  Grid,
} from "@geist-ui/react";

import fetch from "isomorphic-unfetch";
import { orderBy } from "lodash";

export default function Home(props) {
  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs initialValue="1">
        <Text h1 style={{ textAlign: "left" }}>
          Welcome to the <a href="https://nextjs.org">Collaboration Hub!</a>
        </Text>
        <Text p style={{ textAlign: "left", maxWidth: "600px" }}>
          Our mission is to make cloud computing accessible to everyone. We
          build products for developers and designers. And those who aspire to
          become one.
        </Text>
        <Link href="#" icon color style={{ marginBottom: "20px" }}>
          Submit to the hub
        </Link>
        <Tabs.Item label="Everything" value="1">
          <Grid.Container gap={2} justify="left">
            {props.posts.map((event) => (
              <Grid xs={12} md={8}>
                <Card shadow>
                  <Image
                    src="https://dl.airtable.com/.attachmentThumbnails/627ea3c8c6a5e1365b1cfd8372490f07/78c51987"
                    height="100%"
                  />
                  <p>
                    <h4 style={{ display: "inline" }}>{ event.title }</h4> by Samuel P
                    <br /><small style={{ fontStyle: "italic" }}>remixed from Samuel P's Home Land Painting Home</small>
                  </p>
                  <Tag
                    type="error"
                    style={{ display: "inline", marginRight: "6px" }}
                  >
                    Performances
                  </Tag>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </Tabs.Item>
        <Tabs.Item label="Visual Arts" value="2">
          The Fence Jumped over The Evil Rabbit.
        </Tabs.Item>
        <Tabs.Item label="Photography" value="3">
          The Fence Jumped over The Evil Rabbit.
        </Tabs.Item>
        <Tabs.Item label="Performances" value="4">
          The Fence Jumped over The Evil Rabbit.
        </Tabs.Item>
      </Tabs>

      <Divider y={5}>
        <span style={{ textTransform: "none" }}>
          Built by Sam Poder, <a href="">always open source</a>.
        </span>
      </Divider>
    </Page>
  );
}

export const getStaticProps = async () => {
  const posts = await fetch("https://sampoder-api.herokuapp.com/v0.1/Arts%20Week%20Collab%20Hub/Posts")
    .then((r) => r.json())
    .then((posts) =>
      posts.map(({ id, fields }) => ({
        id,
        title: fields["Name of Piece"],
        image: fields["Image"],
        creator: fields["Creator"],
      }))
    )
    .then((posts) => orderBy(posts, "start"));
  console.log(posts);
  return { props: { posts } };
};
