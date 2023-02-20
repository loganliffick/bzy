import styled from 'styled-components';
import Link from 'next/link';

import Headline from '@/components/Headline';

const StyledWrapper = styled.main`
  section {
    width: 100%;
    padding: var(--padV) var(--padH) 0;

    div {
      display: block;
      max-width: var(--reg);
      margin: 0 auto;

      header {
        text-align: left;
      }

      h2 {
        margin: 64px 0 24px;
      }

      p {
        margin-bottom: 12px;
      }

      a {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-position: from-font;
        color: var(--white);
        font-weight: 600;
      }

      ol {
        li {
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 12px;
          color: var(--gray-6);
        }
      }
    }
  }
`;

const Terms = () => {
  return (
    <StyledWrapper>
      <section>
        <div>
          <Headline>
            <h1 className="title">
              Bzy Terms of Service <br /> & Privacy Policy
            </h1>
            <p className="subhead_small">Feb 18, 2023</p>
          </Headline>

          <h2 className="title_small">Terms of Service</h2>
          <p>
            Thank you for using <Link href="https://bzy.so">Bzy</Link>! By using
            our web application, you agree to the following terms of service:
          </p>
          <ol>
            <li>
              We reserve the right to update and change these terms of service
              at any time without notice. It is your responsibility to
              periodically review these terms for any updates or changes.
            </li>
            <li>
              We do not guarantee that our web application will always be
              available or error-free. We will make reasonable efforts to
              maintain the availability of the web application, but cannot be
              held responsible for any interruptions or errors.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information, including your username and password. You are
              also responsible for any activities that occur under your account.
            </li>
            <li>
              You must not use our web application for any illegal or
              unauthorized purposes. You must not violate any laws in your
              jurisdiction, including but not limited to copyright and
              intellectual property laws.
            </li>
            <li>
              We are not responsible for any content that you or others may post
              or share on our web application. You are solely responsible for
              any content that you post, and we do not endorse any content
              posted by users of our web application.
            </li>
            <li>
              We may use cookies and other tracking technologies to improve the
              functionality of our web application. By using our web
              application, you consent to our use of these technologies.
            </li>
            <li>
              If you have any questions or concerns about these terms of
              service, please contact us at{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@bzy.so"
              >
                info@bzy.so
              </Link>
              .
            </li>
          </ol>
          <p>
            By using Bzy, you agree to be bound by these terms of service. We
            appreciate your use of our web application and look forward to
            providing you with a great experience.
          </p>
          <h2 className="title_small">Privacy Policy</h2>
          <p>
            By using our web application, you agree to the collection, use, and
            disclosure of your personal information as described in this privacy
            policy.
          </p>
          <ol>
            <li>
              We collect certain personal information from you when you create
              an account with Bzy, such as your name and email address. We also
              collect information about your use of our web application, such as
              the pages you visit and the features you use.
            </li>
            <li>
              We use the personal information we collect from you to provide and
              improve our web application, and to communicate with you about
              your account and our services.
            </li>
            <li>
              We may share your personal information with third parties for the
              purposes of providing and improving our web application, or as
              required by law. We take reasonable measures to protect your
              personal information from unauthorized access or disclosure.
            </li>
            <li>
              We do not sell your personal information to third parties for
              their marketing purposes.
            </li>
            <li>
              You have the right to access and correct your personal information
              that we collect and maintain. You can access and update your
              personal information through your account settings, or by
              contacting us at{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@bzy.so"
              >
                info@bzy.so
              </Link>
              .
            </li>
            <li>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the updated policy on our web
              application, and we encourage you to periodically review this
              policy for any updates or changes.
            </li>
          </ol>
          <p>
            By using Bzy, you agree to the collection, use, and disclosure of
            your personal information as described in this privacy policy. If
            you have any questions or concerns about our privacy practices,
            please contact us at{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@bzy.so"
            >
              info@bzy.so
            </Link>
            .
          </p>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default Terms;
