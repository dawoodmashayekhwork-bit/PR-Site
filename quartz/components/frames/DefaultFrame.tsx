import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
  }: PageFrameProps) {
    return (
      <>
        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>

            {/* Breadcrumb + Title بالا */}
            <div class="popover-hint">
              {beforeBody.slice(0, 2).map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>

          {/* متن مقاله */}
          <Content {...componentData} />

          {/* Content Meta + Note Properties پایین مقاله */}
          <div class="page-meta-bottom">
            {beforeBody.slice(2).map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>

          <hr />

          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>

          {/* فوتر اختصاصی تمیز و راست‌چین در وسط صفحه */}
          <footer style={{ textAlign: "center", padding: "2rem 0", direction: "rtl", color: "var(--gray)" }}>
            <p style={{ margin: 0, fontSize: "0.9rem" }}> داود مشایخ | یادداشت‌های شخصی و حرفه‌ای © ۲۰۲۶ </p>
          </footer>
        </div>

        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
      </>
    )
  },
}