import { Carousel } from "@mantine/carousel";
import linkIcon from "../assets/link_icon.svg";

export default function ArticleCarousel() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Carousel
        slideSize="90%"
        height={200}
        slideGap="md"
        controlsOffset="sm"
        controlSize={26}
        withControls
        withIndicators={false}
      >
        <Carousel.Slide>
          <div id="article">
            <h3 id="article-link">
              <a
                href="https://www.forbes.com/sites/truetamplin/2025/01/15/the-benefits-of-expense-tracking-and-how-you-can-do-it-effectively/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
                style={{
                  display: "inline-block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "#fff", textDecoration: "underline" }}>
                  The Benefits Of Expense Tracking And How You Can Do It
                  Effectively
                </span>
                <br />
                <span
                  className="link-text"
                  style={{
                    color: "#cef24a",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "0.25rem",
                  }}
                >
                  Read more{" "}
                  <img
                    src={linkIcon}
                    alt="Link icon"
                    style={{ marginLeft: "0.25rem" }}
                  />
                </span>
              </a>
            </h3>

            <div id="article-by">
              <p id="expense-list-category">Forbes</p>
              <p>by True Tamplin</p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div id="article">
            <h3 id="article-link">
              <a
                href="https://www.forbes.com/sites/melissahouston/2024/01/12/how-to-track-your-spending-and-slay-your-finances/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
                style={{
                  display: "inline-block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "#fff", textDecoration: "underline" }}>
                  How To Track Your Spending And Slay Your Finances
                </span>
                <br />
                <span
                  className="link-text"
                  style={{
                    color: "#cef24a",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "0.25rem",
                  }}
                >
                  Read more{" "}
                  <img
                    src={linkIcon}
                    alt="Link icon"
                    style={{ marginLeft: "0.25rem" }}
                  />
                </span>
              </a>
            </h3>

            <div id="article-by">
              <p id="expense-list-category">Forbes</p>
              <p>by Melissa Houston</p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div id="article">
            <h3 id="article-link">
              <a
                href="https://www.forbes.com/sites/enochomololu/2024/06/14/15-money-saving-tips-that-actually-work/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
                style={{
                  display: "inline-block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "#fff", textDecoration: "underline" }}>
                  15 Money-Saving Tips That Actually Work
                </span>
                <br />
                <span
                  className="link-text"
                  style={{
                    color: "#cef24a",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "0.25rem",
                  }}
                >
                  Read more{" "}
                  <img
                    src={linkIcon}
                    alt="Link icon"
                    style={{ marginLeft: "0.25rem" }}
                  />
                </span>
              </a>
            </h3>

            <div id="article-by">
              <p id="expense-list-category">Forbes</p>
              <p>by Enoch Omololu</p>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

{
  /* <Carousel
      slideSize="70%"
      height={200}
      slideGap="md"
      controlsOffset="sm"
      controlSize={26}
      withControls
      withIndicators={false}
    >
      <Carousel.Slide>
        <div id="article">
          <h3 id="article-link">
            <a
              href="https://www.forbes.com/sites/truetamplin/2025/01/15/the-benefits-of-expense-tracking-and-how-you-can-do-it-effectively/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
              style={{
                display: "inline-block",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#fff", textDecoration: "underline" }}>
                The Benefits Of Expense Tracking And How You Can Do It
                Effectively
              </span>
              <br />
              <span
                className="link-text"
                style={{
                  color: "#cef24a",
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: "0.25rem",
                }}
              >
                Read more{" "}
                <img
                  src={linkIcon}
                  alt="Link icon"
                  style={{ marginLeft: "0.25rem" }}
                />
              </span>
            </a>
          </h3>

          <div id="article-by">
            <p id="expense-list-category">Forbes</p>
            <p>by True Tamplin</p>
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div id="article">
          <h3 id="article-link">
            <a
              href="https://www.forbes.com/sites/melissahouston/2024/01/12/how-to-track-your-spending-and-slay-your-finances/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
              style={{
                display: "inline-block",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#fff", textDecoration: "underline" }}>
                How To Track Your Spending And Slay Your Finances
              </span>
              <br />
              <span
                className="link-text"
                style={{
                  color: "#cef24a",
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: "0.25rem",
                }}
              >
                Read more{" "}
                <img
                  src={linkIcon}
                  alt="Link icon"
                  style={{ marginLeft: "0.25rem" }}
                />
              </span>
            </a>
          </h3>

          <div id="article-by">
            <p id="expense-list-category">Forbes</p>
            <p>by Melissa Houston</p>
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div id="article">
          <h3 id="article-link">
            <a
              href="https://www.forbes.com/sites/enochomololu/2024/06/14/15-money-saving-tips-that-actually-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
              style={{
                display: "inline-block",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#fff", textDecoration: "underline" }}>
                15 Money-Saving Tips That Actually Work
              </span>
              <br />
              <span
                className="link-text"
                style={{
                  color: "#cef24a",
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: "0.25rem",
                }}
              >
                Read more{" "}
                <img
                  src={linkIcon}
                  alt="Link icon"
                  style={{ marginLeft: "0.25rem" }}
                />
              </span>
            </a>
          </h3>

          <div id="article-by">
            <p id="expense-list-category">Forbes</p>
            <p>by Enoch Omololu</p>
          </div>
        </div>
      </Carousel.Slide>
    </Carousel> */
}
