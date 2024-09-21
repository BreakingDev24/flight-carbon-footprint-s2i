import style from "./AppLayoutContainer.module.css";

export default function LayoutContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}
