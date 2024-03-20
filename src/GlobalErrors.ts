import { email, helpers, required, requiredIf, sameAs, not, maxLength, minLength } from "@vuelidate/validators";
// import { i18n } from "@app/i18n";

const errorMessages = {
    customRequired: helpers.withMessage(("This field is required."), required),
    customRequiredIf: helpers.withMessage(("This field is required."), requiredIf(true)),
    customEmail: helpers.withMessage(("E-mail is not valid."), email),
    customSameAsTrue: helpers.withMessage(("Izbira je obezna"), sameAs(true)),
    fieldRequired: helpers.withMessage(("This field is required."), required),
    choiceRequired: helpers.withMessage(("Izbira je obezna"), required),
    notSameAs: helpers.withMessage(("Izbira je obezna"), not(sameAs(-1))),
    choiceRequiredIf: helpers.withMessage(("Izbira je obezna"), requiredIf(true)),
    maxLength: helpers.withMessage(("Izbira je obezna"), maxLength(8)),
    minLength: helpers.withMessage(("Izbira je obezna"), minLength(8)),
    zeroValidator: helpers.withMessage(("Izbira je obezna"), not(sameAs(0))),
};
//     customRequiredIf: helpers.withMessage(i18n.global.t("GlobalErrors.FIELD_REQUIRED"), requiredIf(true)),
//     customEmail: helpers.withMessage(("Prosimo vnesite pravilen e-mail"), email),
//     customTRR4: helpers.withMessage(("Prosimo vnesite zadnje 4 številke vašega bančnega računa"), required),
//     customSameAsTrue: helpers.withMessage(i18n.global.t("GlobalErrors.CHECKBOX_CUSTOM"), sameAs(true)),
//     fieldRequired: helpers.withMessage(i18n.global.t("GlobalErrors.FIELD_REQUIRED"), required),
//     choiceRequired: helpers.withMessage(i18n.global.t("GlobalErrors.CHOICE_REQUIRED"), required),
//     notSameAs: helpers.withMessage(i18n.global.t("GlobalErrors.CHOICE_REQUIRED"), not(sameAs(-1))),
//     choiceRequiredIf: helpers.withMessage(i18n.global.t("GlobalErrors.CHOICE_REQUIRED"), requiredIf(true)),
//     maxLength: helpers.withMessage(i18n.global.t("GlobalErrors.MAX_LENGTH"), maxLength(8)),
//     minLength: helpers.withMessage(i18n.global.t("GlobalErrors.MIN_LENGTH"), minLength(8)),
//     zeroValidator: helpers.withMessage(i18n.global.t("GlobalErrors.AMOUNT_CANNOT_BE_ZERO"), not(sameAs(0))),
// };

export default {
    ...errorMessages,
};