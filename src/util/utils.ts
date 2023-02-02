const IMAGE_URL = "https://image.tving.com";

export function getImagePath(url: string, format?: string) {
  return `${IMAGE_URL}/${url}/dims/resize/${format ? format : "1920"}`;
}