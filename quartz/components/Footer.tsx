import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="footer-container">
          <p class="copyright">
            © {year} تمامی حقوق برای <strong>داوود مشایخ</strong> محفوظ است.
          </p>
          <ul class="footer-links">
            <li><a href="/">صفحه اصلی</a></li>
            <li><a href="/Skills">مهارت‌ها</a></li>
            <li><a href="/Contact">ارتباط با من</a></li>
            <li><a href="https://t.me/dawoodbm" target="_blank" rel="noopener noreferrer">تلگرام</a></li>
            <li><a href="https://instagram.com/dawoodbm78" target="_blank" rel="noopener noreferrer">اینستاگرام</a></li>
          </ul>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor