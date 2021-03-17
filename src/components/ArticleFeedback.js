import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/toolkit/trans";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";
// TODO:
// import { InnerCard } from "@elevio/styles/lib/components/cards";
// import { Button } from "@elevio/styles/lib/components/buttons";
// import TextInput from "@elevio/styles/lib/components/form/elements/TextInput";
// import TextArea from "@elevio/styles/lib/components/form/elements/TextArea";
// import ErrorLabel from "@elevio/styles/lib/components/form/elements/ErrorLabel";
// import { Inline } from "@elevio/styles/lib/components/notifications";
import useArticleFeedback, {
  FeedbackFormShape,
} from "@elevio/kb-kit/lib/hooks/useArticleFeedback";

export const FeedbackInitial = ({
  className,
  title,
  onPositive,
  onNegative,
  isLoading,
}) => {
  const { t } = useTranslation();
  const defaultTitle = t(
    "articleFeedback.question",
    "Did this article help solve your problem?"
  );
  const _title = title || defaultTitle;
  return (
    <h1>TODO</h1>
    // <InnerCard
    //   className={cx(
    //     "flex flex-col lg:flex-row items-center justify-between",
    //     className
    //   )}
    //   data-testid="article-feedback"
    // >
    //   <h3 className="mb-6 lg:mb-0">{_title}</h3>
    //   <div className="flex-end align-right">
    //     <Button
    //       className="ml-4"
    //       size="compact"
    //       onClick={onPositive}
    //       disabled={isLoading}
    //       data-testid="article-feedback-positive"
    //     >
    //       <Trans i18nKey="articleFeedback.positive">Yes</Trans>
    //     </Button>
    //     <Button
    //       className="ml-4"
    //       size="compact"
    //       onClick={onNegative}
    //       disabled={isLoading}
    //       data-testid="article-feedback-negative"
    //     >
    //       <Trans i18nKey="articleFeedback.negative">No</Trans>
    //     </Button>
    //   </div>
    // </InnerCard>
  );
};

const FeedbackError = ({ className }) => (
  <div className={className}>
    <Trans i18nKey="articleFeedback.error">
      Sorry there has been a problem, please try again.
    </Trans>
  </div>
);

export const FeedbackSuccess = ({ className }) => {
  const { t } = useTranslation();
  const message = t(
    "articleFeedback.thanksMsg",
    "Thanks for submitting your feedback!"
  );

  // return <Inline title={message} type="success" />;
  return null;
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  // return <ErrorLabel data-testid={error}>{error}</ErrorLabel>;
  return null;
};

const EmailBox = ({ error, ...props }) => {
  const { t } = useTranslation();
  // return (
  //   <>
  //     <TextInput
  //       type="email"
  //       name="email"
  //       placeholder={t("articleFeedback.emailPlaceholder")}
  //       data-testid="article-feedback-email-input"
  //       hasError={!!error}
  //       {...props}
  //     />
  //     <ErrorMessage error={error} />
  //   </>
  // );

  return null;
};

const MessageBox = ({ error, ...props }) => {
  const { t } = useTranslation();
  // return (
  //   <>
  //     <TextArea
  //       name="feedback"
  //       rows={8}
  //       noResize
  //       placeholder={t("articleFeedback.feedbackPlaceholder")}
  //       data-testid="article-feedback-feedback-input"
  //       hasError={!!error}
  //       {...props}
  //     />
  //     <ErrorMessage error={error} />
  //   </>
  // );

  return null;
};

const SubmitButton = ({ disabled }) => {
  const classes = cx("submit", { invalid: disabled });
  // return (
  //   <Button
  //     appearance="primary"
  //     size="compact"
  //     type="submit"
  //     className={classes}
  //     disabled={disabled}
  //     data-testid="article-feedback-submit-button"
  //   >
  //     <Trans i18nKey="articleFeedback.submit">Submit</Trans>
  //   </Button>
  // );
  return null;
};

export const FeedbackForm = ({
  className,
  isSubmitting,
  isEmailHidden,
  values,
  showAnonymousWarning,
  messageError,
  emailError,
  onFeedbackSkipped,
  handleEmailChange,
  handleMessageChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      {/* <InnerCard className={className}>
        <h3 className="mb-6">
          <Trans i18nKey="articleFeedback.negativeQuestion">
            Sorry this article did not help. We would love your feedback.
          </Trans>
        </h3>

        <MessageBox
          disabled={isSubmitting}
          error={messageError}
          value={values.feedback}
          onChange={handleMessageChange}
        />

        {!isEmailHidden && (
          <EmailBox
            disabled={isSubmitting}
            value={values.email}
            onChange={handleEmailChange}
            error={emailError}
          />
        )}

        {showAnonymousWarning && (
          <p className="mb-4 text-lg">
            <Trans i18nKey="articleFeedback.confirmAnon">
              Are you sure you want to send this anonymously?
            </Trans>
          </p>
        )}

        <div className="flex items-center justify-between">
          <SubmitButton disabled={isSubmitting || !!messageError} />

          {!showAnonymousWarning && (
            <Button
              appearance="minimal"
              onClick={onFeedbackSkipped}
              disabled={isSubmitting}
              data-testid="article-feedback-skip-button"
            >
              <Trans i18nKey="articleFeedback.skip">Skip and send</Trans>
            </Button>
          )}
        </div>
      </InnerCard> */}
    </form>
  );
};

const ArticleFeedback = ({ className }) => {
  const {
    stage,
    isFeedbackEnabled,
    isLoading,
    values,
    isFeedbackFormSubmitting,
    emailFieldIsHidden,
    showAnonymousWarning,
    hasSubmitted,
    messageError,
    emailError,
    onSubmit,
    onNegativeReaction,
    onPositiveReaction,
    onFeedbackSkipped,
    handleMessageChange,
    handleEmailChange,
  } = useArticleFeedback();

  return null;

  // if (!isFeedbackEnabled) return null;
  // if (stage === "error") return <FeedbackError className={className} />;
  // if (stage === "positive" || stage === "submitted")
  //   return <FeedbackSuccess className={className} />;
  // if (stage === "negative") {
  //   return (
  //     <FeedbackForm
  //       className={className}
  //       onFeedbackSkipped={onFeedbackSkipped}
  //       onSubmit={onSubmit}
  //       isSubmitting={isFeedbackFormSubmitting}
  //       isEmailHidden={emailFieldIsHidden}
  //       handleMessageChange={handleMessageChange}
  //       handleEmailChange={handleEmailChange}
  //       showAnonymousWarning={showAnonymousWarning}
  //       hasSubmitted={hasSubmitted}
  //       values={values}
  //       messageError={messageError}
  //       emailError={emailError}
  //     />
  //   );
  // }
  // return (
  //   <FeedbackInitial
  //     className={className}
  //     onPositive={onPositiveReaction}
  //     onNegative={onNegativeReaction}
  //     isLoading={isLoading}
  //   />
  // );
};

export default ArticleFeedback;
