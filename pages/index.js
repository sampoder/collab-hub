import Head from "next/head";
import {
  Button,
  Page,
  Text,
  Card,
  Image,
  Note,
  Code,
  Tag,
  Link,
  file,
  Divider,
  Spacer,
  Tabs,
  Grid,
} from "@geist-ui/react";
import * as Icon from "@geist-ui/react-icons";
import Masonry from "react-masonry-css";

import fetch from "isomorphic-unfetch";
import { orderBy } from "lodash";

export default function Home(props) {
  return (
    <Page>
      <Head>
        <title>Arts Week Collaboration Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs initialValue="1">
        <Tabs.Item label="Everything" value="1">
          <Text h1 style={{ textAlign: "left" }}>
            Welcome to the <a>Collaboration Hub!</a>
          </Text>
          <Text p style={{ textAlign: "left", maxWidth: "600px" }}>
            Pulled apart by COVID-19, let's come together to collaborate on art
            virtually. Here you can share your artwork with the entire school as
            well as share remixes of works done by your peers at school.
          </Text>
          <Link href="https://airtable.com/shrldLgPMyuAKWKvc" icon color style={{ marginBottom: "20px" }}>
            Submit to the hub
          </Link>
          <Masonry
            key="masonry"
            breakpointCols={{
              default: 3,
              1024: 3,
              640: 2,
              480: 1,
            }}
            className="masonry-posts"
            columnClassName="masonry-posts-column"
          >
            {props.posts.map((event) => (
              <Card shadow key={event.id} style={{ marginBottom: "24px" }}>
                {event.file[0].type.includes("image") && (
                  <Image src={event.file[0].url} height="100%" />
                )}
                {event.file[0].type.includes("video") && (
                  <video
                    width="100%"
                    height="100%"
                    style={{
                      marginTop: "-16pt",
                      marginRight: "-16pt",
                      marginLeft: "-16pt",
                      objectFit: "cover",
                      width: "calc(100% + 32pt)",
                      borderRadius: "5px 5px 0px 0px",
                    }}
                    controls
                  >
                    <source src={event.file[0].url} />
                  </video>
                )}
                <p>
                  <h4 style={{ display: "inline" }}>{event.title}</h4> by Samuel
                  P
                  <br />
                  <small style={{ fontStyle: "italic" }}>
                    remixed from Samuel P's Home Land Painting Home
                  </small>
                </p>
                <Tag style={{ display: "inline", marginRight: "6px" }}>
                  ↻ Remix me
                </Tag>
              </Card>
            ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Visual Arts" value="2">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Visual Arts</a> Posts
          </Text>
          <Masonry
            key="masonry"
            breakpointCols={{
              default: 3,
              1024: 3,
              640: 2,
              480: 1,
            }}
            className="masonry-posts"
            columnClassName="masonry-posts-column"
          >
            {props.posts
              .filter((event) => event.type.includes("Visual Arts"))
              .map((event) => (
                <Card shadow key={event.id} style={{ marginBottom: "24px" }}>
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "-16pt",
                        marginRight: "-16pt",
                        marginLeft: "-16pt",
                        objectFit: "cover",
                        width: "calc(100% + 32pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by
                    Samuel P
                    <br />
                    <small style={{ fontStyle: "italic" }}>
                      remixed from Samuel P's Home Land Painting Home
                    </small>
                  </p>
                  <Tag style={{ display: "inline", marginRight: "6px" }}>
                    ↻ Remix me
                  </Tag>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Photography" value="3">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Photography</a> Posts
          </Text>
          <Masonry
            key="masonry"
            breakpointCols={{
              default: 3,
              1024: 3,
              640: 2,
              480: 1,
            }}
            className="masonry-posts"
            columnClassName="masonry-posts-column"
          >
            {props.posts
              .filter((event) => event.type.includes("Photography"))
              .map((event) => (
                <Card shadow key={event.id} style={{ marginBottom: "24px" }}>
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "-16pt",
                        marginRight: "-16pt",
                        marginLeft: "-16pt",
                        objectFit: "cover",
                        width: "calc(100% + 32pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by
                    Samuel P
                    <br />
                    <small style={{ fontStyle: "italic" }}>
                      remixed from Samuel P's Home Land Painting Home
                    </small>
                  </p>
                  <Tag style={{ display: "inline", marginRight: "6px" }}>
                    ↻ Remix me
                  </Tag>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Performances" value="4">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Performance</a> Posts
          </Text>
          <Masonry
            key="masonry"
            breakpointCols={{
              default: 3,
              1024: 3,
              640: 2,
              480: 1,
            }}
            className="masonry-posts"
            columnClassName="masonry-posts-column"
          >
            {props.posts
              .filter((event) => event.type.includes("Performances"))
              .map((event) => (
                <Card shadow key={event.id} style={{ marginBottom: "24px" }}>
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "-16pt",
                        marginRight: "-16pt",
                        marginLeft: "-16pt",
                        objectFit: "cover",
                        width: "calc(100% + 32pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by
                    Samuel P
                    <br />
                    <small style={{ fontStyle: "italic" }}>
                      remixed from Samuel P's Home Land Painting Home
                    </small>
                  </p>
                  <Tag style={{ display: "inline", marginRight: "6px" }}>
                    ↻ Remix me
                  </Tag>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
      </Tabs>

      <Divider y={5}>
        <span style={{ textTransform: "none" }}>
          Built by Sam Poder,{" "}
          <a href="https://github.com/sampoder/gwas-arts-week-collab-hub">
            always open source
          </a>
          .
        </span>
      </Divider>
      <style jsx global key="masonry-style">{`
        .masonry-posts {
          display: flex;
          width: 100%;
          max-width: 100%;
        }
        .masonry-posts-column {
          background-clip: padding-box;
        }
        .post {
          margin-bottom: 2px;
        }
        .masonry-posts-column:nth-child(1) {
          padding-left: 0px;
          padding-right: 0px;
        }
        .masonry-posts-column:nth-child(2) {
          padding-left: 16px;
          padding-right: 0px;
        }
        @media (max-width: 640px) {
          .masonry-posts-column:nth-child(1) {
            padding-left: 0px;
            padding-right: 16px;
          }
          .masonry-posts-column:nth-child(2) {
            padding-left: 16px;
            padding-right: 0px;
          }
        }
        @media (min-width: 641px) {
          .masonry-posts-column:nth-child(1) {
            padding-left: 0px;
            padding-right: 16px;
          }
          .masonry-posts-column:nth-child(2) {
            padding-left: 8px;
            padding-right: 8px;
          }
          .masonry-posts-column:nth-child(3) {
            padding-left: 16px;
            padding-right: 0px;
          }
        }
      `}</style>
    </Page>
  );
}

export const getServerSideProps = async () => {
  const posts = await fetch(
    "https://sampoder-api.herokuapp.com/v0.1/Arts%20Week%20Collab%20Hub/Posts?select=filterByFormula:'{Verified?}==true',"
  )
    .then((r) => r.json())
    .then((posts) =>
      posts.map(({ id, fields }) => ({
        id: fields["ID"],
        title: fields["Name of Piece"],
        file: fields["Image"],
        creator: fields["Creator"],
        type: fields["Type"],
      }))
    )
    .then((posts) => orderBy(posts, "title"));
  console.log(posts);
  return { props: { posts } };
};
