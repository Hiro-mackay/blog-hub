import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

export default async function NotFound() {
  return (
    <>
      <PageSEO title="404 not found" noindex={true} />

      <div className="error">
        <ContentWrapper>
          <div>
            <div className="error__status">404</div>
            <h1 className="error__message">Page not found...</h1>

            <nav className="error__actions">
              <LinkBackHome />
            </nav>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}
