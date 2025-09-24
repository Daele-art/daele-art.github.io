// src/api/integrations.js

// Dummy integraties, zodat de app blijft werken zonder Base44
export const Core = {};

export const InvokeLLM = async (prompt) => {
  console.warn("InvokeLLM is een placeholder. Prompt:", prompt);
  return { output: "Dit is een testantwoord (dummy)" };
};

export const SendEmail = async (data) => {
  console.warn("SendEmail is een placeholder. Data:", data);
  return { success: true };
};

export const UploadFile = async (file) => {
  console.warn("UploadFile is een placeholder. File:", file?.name || "onbekend");
  return { url: "/uploads/dummy-file.txt" };
};

export const GenerateImage = async (params) => {
  console.warn("GenerateImage is een placeholder. Params:", params);
  return { url: "/images/dummy.png" };
};

export const ExtractDataFromUploadedFile = async (file) => {
  console.warn("ExtractDataFromUploadedFile is een placeholder. File:", file);
  return { content: "Dummy file content" };
};

export const CreateFileSignedUrl = async (filename) => {
  console.warn("CreateFileSignedUrl is een placeholder. Filename:", filename);
  return { url: `/signed/${filename}` };
};

export const UploadPrivateFile = async (file) => {
  console.warn("UploadPrivateFile is een placeholder. File:", file?.name || "onbekend");
  return { success: true };
};
