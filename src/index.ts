import { defineHook } from "@directus/extensions-sdk";
import { useTreblle } from "treblle";

export default defineHook(({ init }) => {
  init("middlewares.after", async ({ app }) => {
    if (!process.env.TREBLLE_API_KEY || !process.env.TREBLLE_PROJECT_ID) {
      return;
    }
    const showErrors = process.env.TREBLLE_SHOW_ERRORS === "true";
    const additionalFieldsToMask =
      process.env.TREBLLE_FIELDS_TO_MASK &&
      JSON.parse(process.env.TREBLLE_FIELDS_TO_MASK);

    useTreblle(app, {
      apiKey: process.env.TREBLLE_API_KEY,
      projectId: process.env.TREBLLE_PROJECT_ID,
      showErrors,
      additionalFieldsToMask,
    });
  });
});
