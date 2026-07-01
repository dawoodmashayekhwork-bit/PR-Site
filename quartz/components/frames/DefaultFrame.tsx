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
    footer: Footer,
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
        </div>

        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <Footer {...componentData} />
      </>
    )
  },
}