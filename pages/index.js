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
  Modal,
  useModal,
  Tabs,
  Grid,
} from "@geist-ui/react";
import * as Icon from "@geist-ui/react-icons";
import Masonry from "react-masonry-css";

import fetch from "isomorphic-unfetch";
import { orderBy } from "lodash";
import Meta from "../components/meta.js";

export default function Home(props) {
  const { visible, setVisible, bindings } = useModal();
  return (
    <Page>
      <Meta />
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
          <Link
            href="https://airtable.com/shrldLgPMyuAKWKvc"
            color
            style={{ marginBottom: "20px", marginRight: "10px" }}
          >
            <Button auto>Submit to the hub</Button>
          </Link>

          <Button auto onClick={() => setVisible(true)}>
            How it works
          </Button>
          <Modal width="750pt" style={{ paddingTop: "-16pt" }} {...bindings}>
            <Modal.Content>
              <Modal.Action
                passive
                onClick={() => setVisible(false)}
                style={{
                  display: "inline-block",
                  padding: "0pt",
                  marginBottom: "-16pt",
                }}
              >
                Close
              </Modal.Action>
              <h1
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: "3em",
                  fontWeight: "800",
                }}
              >
                Be Creative. Together.
              </h1>
              <h2 style={{ fontSize: "1.5em", fontWeight: "600" }}>
                Find collaborators. Finish projects. Or start your own…
              </h2>
              <p>
                On COLLABORATION HUB, people don’t just post their own stuff --
                we make things together. Whether you’re a beginner or an expert,
                whether you’re into writing, film, music, or any other kind of
                art, you’ll find this platform a welcoming and positive place to
                be your creative self.
              </p>
              <h2 style={{ fontSize: "1.5em", fontWeight: "600" }}>
                How it works
              </h2>
              <p>
                The COLLABORATION HUB is a new, interactive, sharing platform
                that allows students to be inspired by the work of others; REMIX
                and generate their own work; and share it on the HUB for others
                to be inspired further.
              </p>
              <p>
                This is an ARTS WEEK launch where everyone from artists,
                musicians, actors, singers, and dancers, to designers, editors,
                photographers, writers and coders can have a go. Just scroll
                through the samples in the gallery and remix it to make
                something (anything!) new from it.
              </p>
              <p>TIMELINE:</p>
              <p>
                The ARTS WEEK challenge will end on Friday 25 September the best
                collaborative creations will be shared in an assembly showcase
                and social media.
              </p>
              <p>
                Make sure you check emails and Google Currents for updates and
                ideas. We'll be featuring awesome contributions and REMIXES as
                we receive them and post them on this site, so make sure to
                check back to see what’s new.
              </p>
              <p>Happy COLLABORATING and REMIXING!</p>
              <h2 style={{ fontSize: "1.5em", fontWeight: "600" }}>
                What can you do?
              </h2>
              <ol>
                <li>
                  Explore the gallery of work shared on the homepage
                  (Everything) or under the different section tabs above (Visual
                  Arts, Photography, Music, Drama, Writing, Dance).
                </li>
                <li>
                  Choose something that inspires you and MAKE SOMETHING NEW!
                </li>
                <li>Click the REMIX button and submit your creation.</li>
              </ol>
              <p>It's that easy!</p>
              <p>See an image you like (painting, photograph)? You could…</p>
              <ul>
                <li>Write a song about it.</li>
                <li>Perform a dance inspired by it.</li>
                <li>Do a pencil sketch version of it.</li>
              </ul>
              <p>
                See a performance video that interests you (drama, dance)? You
                could…
              </p>
              <ul>
                <li>Compose a soundtrack/sound effects track for it.</li>
                <li>Record a voice over for the actors.</li>
                <li>Design costumes for the performers.</li>
              </ul>
              <p>
                See some cryptic CODE sequence for a piece of music? You could…
              </p>
              <ul>
                <li>Code your own version/remix of it.</li>
                <li>Code an accompanying track to go with it.</li>
                <li>Perform a dance to the sound.</li>
                <li>Create a digital design for the background.</li>
              </ul>
              <p>Hear music you like?? You could…</p>
              <ul>
                <li>
                  Act out a scene/monologue using it as your background music.
                </li>
                <li>Compose another instrument to go with it.</li>
                <li>Film and music video for it.</li>
                <li>Create a digital design for the background.</li>
              </ul>
              <p style={{ fontWeight: '600' }}>The options are endless...what can YOU do?</p>
            </Modal.Content>
            <Modal.Action passive onClick={() => setVisible(false)}>
              Close
            </Modal.Action>
          </Modal>
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
              <Card
                shadow
                key={event.id}
                style={{
                  marginBottom: "24px",
                  border: "0px solid transparent",
                }}
              >
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
                  <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                  {event.creator}
                  <br />
                  {event.remixCreator != "" && (
                    <>
                      <hr />
                      <small style={{ fontStyle: "italic" }}>
                        remixed from {event.remixCreator}'s{" "}
                        {event.remixPieceName}
                      </small>
                    </>
                  )}
                </p>
                <a
                  href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                >
                  <Tag style={{ display: "inline", marginRight: "6px" }}>
                    ↻ Remix me
                  </Tag>
                </a>
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
                <Card
                  shadow
                  key={event.id}
                  style={{
                    marginBottom: "24px",
                    border: "0px solid transparent",
                  }}
                >
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
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                    {event.creator}
                    <br />
                    {event.remixCreator != "" && (
                      <>
                        <hr />
                        <small style={{ fontStyle: "italic" }}>
                          remixed from {event.remixCreator}'s{" "}
                          {event.remixPieceName}
                        </small>
                      </>
                    )}
                  </p>
                  <a
                    href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                  >
                    <Tag style={{ display: "inline", marginRight: "6px" }}>
                      ↻ Remix me
                    </Tag>
                  </a>
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
                <Card
                  shadow
                  key={event.id}
                  style={{
                    marginBottom: "24px",
                    border: "0px solid transparent",
                  }}
                >
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
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                    {event.creator}
                    <br />
                    {event.remixCreator != "" && (
                      <>
                        <hr />
                        <small style={{ fontStyle: "italic" }}>
                          remixed from {event.remixCreator}'s{" "}
                          {event.remixPieceName}
                        </small>
                      </>
                    )}
                  </p>
                  <a
                    href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                  >
                    <Tag style={{ display: "inline", marginRight: "6px" }}>
                      ↻ Remix me
                    </Tag>
                  </a>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Music" value="4">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Musical</a> Posts
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
              .filter((event) => event.type.includes("Musical"))
              .map((event) => (
                <Card
                  shadow
                  key={event.id}
                  style={{
                    marginBottom: "24px",
                    border: "0px solid transparent",
                  }}
                >
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "calc(-16pt - 1px)",
                        marginRight: "calc(-16pt - 1px)",
                        marginLeft: "calc(-16pt - 1px)",
                        objectFit: "cover",
                        width: "calc(100% + 34pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                    {event.creator}
                    <br />
                    {event.remixCreator != "" && (
                      <>
                        <hr />
                        <small style={{ fontStyle: "italic" }}>
                          remixed from {event.remixCreator}'s{" "}
                          {event.remixPieceName}
                        </small>
                      </>
                    )}
                  </p>
                  <a
                    href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                  >
                    <Tag style={{ display: "inline", marginRight: "6px" }}>
                      ↻ Remix me
                    </Tag>
                  </a>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Drama" value="5">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Dramatic</a> Posts
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
              .filter((event) => event.type.includes("Dramatic"))
              .map((event) => (
                <Card
                  shadow
                  key={event.id}
                  style={{
                    marginBottom: "24px",
                    border: "0px solid transparent",
                  }}
                >
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "calc(-16pt - 1px)",
                        marginRight: "calc(-16pt - 1px)",
                        marginLeft: "calc(-16pt - 1px)",
                        objectFit: "cover",
                        width: "calc(100% + 34pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                    {event.creator}
                    <br />
                    {event.remixCreator != "" && (
                      <>
                        <hr />
                        <small style={{ fontStyle: "italic" }}>
                          remixed from {event.remixCreator}'s{" "}
                          {event.remixPieceName}
                        </small>
                      </>
                    )}
                  </p>
                  <a
                    href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                  >
                    <Tag style={{ display: "inline", marginRight: "6px" }}>
                      ↻ Remix me
                    </Tag>
                  </a>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Writing" value="6">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Creative Writing</a> Posts
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
              .filter((event) => event.type.includes("Creative Writing"))
              .map((event) => (
                <Card
                  shadow
                  key={event.id}
                  style={{
                    marginBottom: "24px",
                    border: "0px solid transparent",
                  }}
                >
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "calc(-16pt - 1px)",
                        marginRight: "calc(-16pt - 1px)",
                        marginLeft: "calc(-16pt - 1px)",
                        objectFit: "cover",
                        width: "calc(100% + 34pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                    {event.creator}
                    <br />
                    {event.remixCreator != "" && (
                      <>
                        <hr />
                        <small style={{ fontStyle: "italic" }}>
                          remixed from {event.remixCreator}'s{" "}
                          {event.remixPieceName}
                        </small>
                      </>
                    )}
                  </p>
                  <a
                    href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                  >
                    <Tag style={{ display: "inline", marginRight: "6px" }}>
                      ↻ Remix me
                    </Tag>
                  </a>
                </Card>
              ))}
          </Masonry>
        </Tabs.Item>
        <Tabs.Item label="Dance" value="7">
          <Text h1 style={{ textAlign: "left" }}>
            All of the <a>Dancing</a> Posts
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
              .filter((event) => event.type.includes("Dance"))
              .map((event) => (
                <Card
                  shadow
                  key={event.id}
                  style={{
                    marginBottom: "24px",
                    border: "0px solid transparent",
                  }}
                >
                  {event.file[0].type.includes("image") && (
                    <Image src={event.file[0].url} height="100%" />
                  )}
                  {event.file[0].type.includes("video") && (
                    <video
                      width="100%"
                      height="100%"
                      style={{
                        marginTop: "calc(-16pt - 1px)",
                        marginRight: "calc(-16pt - 1px)",
                        marginLeft: "calc(-16pt - 1px)",
                        objectFit: "cover",
                        width: "calc(100% + 34pt)",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                      controls
                    >
                      <source src={event.file[0].url} />
                    </video>
                  )}
                  <p>
                    <h4 style={{ display: "inline" }}>{event.title}</h4> by{" "}
                    {event.creator}
                    <br />
                    {event.remixCreator != "" && (
                      <>
                        <hr />
                        <small style={{ fontStyle: "italic" }}>
                          remixed from {event.remixCreator}'s{" "}
                          {event.remixPieceName}
                        </small>
                      </>
                    )}
                  </p>
                  <a
                    href={`https://airtable.com/shrasbn5IUeiSkjFI?prefill_You%20are%20submitting%20a%20remix%20of=${event.id}`}
                  >
                    <Tag style={{ display: "inline", marginRight: "6px" }}>
                      ↻ Remix me
                    </Tag>
                  </a>
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
      <style jsx global key="masonry-style">{`
        a {
          color: #ec5454 !important;
        }
      `}</style>
    </Page>
  );
}

export const getServerSideProps = async () => {
  const posts = await fetch(
    'https://sampoder-api.herokuapp.com/v0.1/Arts%20Week%20Collab%20Hub/Posts?select={"filterByFormula":"{Verified?}=1"}'
  )
    .then((r) => r.json())
    .then((posts) =>
      posts.map(({ id, fields }) => ({
        id,
        title: fields["Name of Piece"],
        file: fields["Image"],
        creator: fields["Creator"],
        type: fields["Type"],
        remixCreator: fields["Creator (from Remix of:)"]
          ? fields["Creator (from Remix of:)"]
          : "",
        remixPieceName: fields["Name of Piece (from Remix of:)"]
          ? fields["Name of Piece (from Remix of:)"]
          : "",
      }))
    )
    .then((posts) => orderBy(posts, "title"));
  console.log(posts);
  return { props: { posts } };
};
