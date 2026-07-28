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

          <hr style={{ marginBottom: "0.5rem" }} />

          <div class="page-footer" style={{ margin: 0, padding: 0 }}>
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>

          {/* فوتر چسبیده به خط */}
          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "0.5rem 0 1.5rem 0",
              marginTop: "-0.2rem",
              direction: "rtl",
              fontSize: "0.85rem",
              color: "var(--gray)",
            }}
          >
            {/* سمت راست: لینک‌های دسترسی سریع */}
            <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
              <a href="http://dawoodmashayekh.ir/" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                خانه
              </a>
              <a href="http://dawoodmashayekh.ir/%D9%BE%D8%B1%D9%88%DA%98%D9%87-%D9%87%D8%A7/" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                پروژه‌ها
              </a>
              <a href="http://dawoodmashayekh.ir/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D9%86/" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                من کی هستم
              </a>
              <a href="http://dawoodmashayekh.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%D9%87%D8%A7/" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                یادداشت‌ها
              </a>
              <a href="http://dawoodmashayekh.ir/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D9%86/%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7-%D8%A8%D8%A7-%D9%85%D9%86" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                ارتباط با من
              </a>
            </div>

            {/* سمت چپ: متن برندینگ و کپی‌رایت */}
            <div>
              <span>داود مشایخ | یادداشت‌های شخصی و حرفه‌ای © ۲۰۲۶</span>
            </div>
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