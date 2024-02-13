import Link from "next/link";

const PageLayout = ({ MenuData, menuGrid, title, gridNumber }) => {
  return (
    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
      <h3 className="rbt-short-title">{title}</h3>
      <ul className="mega-menu-item">
        {MenuData &&
          MenuData.menuData.map((data, index) => {
            if (data.menuType === menuGrid) {
              if (gridNumber === "1") {
                const elements = data.gridMenuItems1?.map(
                  (value, innerIndex) => (
                    <li key={innerIndex}>
                      <Link href={value.coming ? "/maintenance" : value.link}>
                        {value.title}
                        {value.coming ? (
                          <span className="rbt-badge-card ms-3">{value.coming}</span>
                        ) : value.subTitle ? (
                          <span className="rbt-badge-card">
                            {value.subTitle}
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
                  )
                );
                return elements;
              } else if (gridNumber === "2") {
                const elements = data.gridMenuItems2?.map(
                  (value, innerIndex) => (
                    <li key={innerIndex}>
                      <Link href={value.coming ? "/maintenance" : value.link}>
                        {value.title}
                        {value.coming ? (
                          <span className="rbt-badge-card ms-3">{value.coming}</span>
                        ) : value.subTitle ? (
                          <span className="rbt-badge-card">
                            {value.subTitle}
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
                  )
                );
                return elements;
              }
              const elements = data.gridMenuItems3?.map((value, innerIndex) => (
                <li key={innerIndex}>
                  <Link href={value.coming ? "/maintenance" : value.link}>
                    {value.title}
                    {value.coming ? (
                      <span className="rbt-badge-card ms-3">{value.coming}</span>
                    ) : value.subTitle ? (
                      <span className="rbt-badge-card">{value.subTitle}</span>
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              ));
              return elements;
            }
          })}
      </ul>
    </div>
  );
};
export default PageLayout;
