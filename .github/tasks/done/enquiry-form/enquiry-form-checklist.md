# Enquiry Form Implementation Checklist

## Phase 1: Project Setup & Routing

**Step 1.1:** Create `src/views/EnquiryFormView.vue` (page wrapper)

- [x] View file created

**Step 1.2:** Add `/enquiry-form` route to `src/router/index.ts`

- [x] Route added

**Step 1.3:** Test navigation to the new route

- [x] Route loads the new view with correct layout
- [x] No errors in navigation

---

## Phase 2: Main Form Component

**Step 2.1:** Create `src/components/EnquiryForm.vue` (main form logic)

- [x] Component file created
- [x] Basic layout with page title and form structure implemented

**Step 2.2:** Add Zod to `package.json` if missing and set up validation schema

- [x] Zod installed and imported
- [x] Validation schema defined

**Step 2.3:** Implement all form fields in Japanese

- [x] 名前 (Name): required, min 2 chars, max 50 chars
- [x] メールアドレス (Email Address): required, valid email format
- [x] 電話番号 (Phone Number): optional, valid phone format (starts with 0, no hyphens, 10 to 11 digits) if provided
- [x] お問い合わせ内容 (Enquiry Content): required, min 10 chars
- [x] 添付ファイル (Attachment): optional, PDF/JPG/PNG only, max 5MB
- [x] 利用規約 (ToS) section and checkbox: checkbox must be checked to submit

**Step 2.4:** Mark required fields in red

- [x] Required fields visually marked

**Step 2.5:** Show error messages below each field, in Japanese

- [x] Error messages implemented

**Step 2.6:** Disable submit button until all required fields are valid and ToS is agreed

- [x] Button disables/enables correctly

**Step 2.7:** Auto-focus first invalid field on submit

- [x] Auto-focus works as intended

**Step 2.8:** Use browser alert for confirmation

- [x] Confirmation alert displays entered details (except file)

**Step 2.9:** Save submitted data to localStorage as an array of enquiries. Provide a download of the full array as `enquiries.json`.

- [x] Data saved to localStorage and appended
- [x] Download of all enquiries as JSON is available

**Step 2.10:** Reset form after submission

- [x] Form resets

**Step 2.11:** Use ARIA attributes and roles for all interactive elements

- [x] ARIA attributes present

**Step 2.12:** Use TailwindCSS (if installed) or scoped CSS for styling and responsiveness

- [x] Responsive styles applied

**Step 2.13:** Use site's CSS variables for color and background

- [x] Color variables used

**Step 2.14:** Ensure WCAG AA compliance (labels, ARIA, keyboard navigation, color contrast)

- [x] Accessibility features present and functional

**Step 2.15:** Review UI for minimal, clean design

- [x] UI matches minimal, clean design

---

## Phase 3: Subcomponents Implementation

**Phase skipped: All required logic is implemented inline in EnquiryForm.vue. No subcomponents needed for this demo.**

---

## Phase 4: Testing

**Step 4.1:** Create unit tests in `src/components/__tests__/` for:

- [x] Validation logic (Zod)
- [x] Error display
- [x] Accessibility (labels, ARIA, keyboard)
- [x] Responsiveness (mobile/desktop)
- [x] Submit flow and reset
- [x] File upload validation
- [x] ToS agreement logic

**Step 4.2:** Run all tests and check coverage

- [x] All tests pass
- [x] Coverage includes all major logic and UI/UX features

---

## Phase 5: Documentation

**Step 5.1:** Update README with usage instructions, accessibility, and responsiveness notes

- [x] Documentation updated

**Step 5.2:** Review documentation for completeness and accuracy

- [x] Documentation is clear, complete, and matches implementation

---

**All phases complete. Enquiry Form implementation plan is DONE.**
