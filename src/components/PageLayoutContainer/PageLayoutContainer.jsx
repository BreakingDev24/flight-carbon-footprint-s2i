import style from "./PageLayoutContainer.module.css";

export default function PageLayoutContainer({ children }) {
  return <main className={style.pageContainer}>{children}</main>;
}
