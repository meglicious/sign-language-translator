import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

export const addTranslation = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    });

    if (!response.ok) {
      throw new Error("could not update the text for translation");
    }

    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH", //update parts of the record
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("could not update the text for translation");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
