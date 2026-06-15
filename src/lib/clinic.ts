// Central source of truth for all clinic contact details.
// Components hide empty values rather than render broken placeholders.

export const clinic = {
  name: "Ilona Endocrine, Skin & Wellness Centre",
  doctors: [
    { name: "Dr. Kunal Gupta", specialty: "Endocrinology & Metabolic Medicine" },
    { name: "Dr. Pournami P", specialty: "Dermatology, Skin & Hair" },
  ],
  phone: "+91 96866 29759",
  whatsapp: "919686629759",
  // TODO: Replace with real clinic email address
  email: "",
  address:
    "Ilona Endocrine and Wellness Centre, 2285, 14th A Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
  hours: {
    weekdays: "Monday – Saturday · 10:00 AM – 9:00 PM",
    sunday: "Sunday · Closed",
  },
  // TODO: Replace with a Google Maps embed URL for the clinic location
  mapEmbedUrl: "",
  // TODO: Replace with your Formspree form ID (free at formspree.io). Leave empty to disable the form.
  formspreeId: "",
} as const;
