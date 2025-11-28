# Enquiry Form Implementation Checklist

## Phase 1: Project Setup & Routing

**Step 1.1:** Create `src/views/EnquiryFormView.vue` (page wrapper)

- [ ] View file created

**Step 1.2:** Add `/enquiry-form` route to `src/router/index.ts`

- [ ] Route added

**Step 1.3:** Test navigation to the new route

- [ ] Route loads the new view with correct layout
- [ ] No errors in navigation

---

## Phase 2: Main Form Component

**Step 2.1:** Create `src/components/EnquiryForm.vue` (main form logic)

- [ ] Component file created
- [ ] Basic layout with page title and form structure implemented

**Step 2.2:** Add Zod to `package.json` if missing and set up validation schema

- [ ] Zod installed and imported
- [ ] Validation schema defined

**Step 2.3:** Implement all form fields in Japanese

- [ ] 名前 (Name): required, min 2 chars, max 50 chars
- [ ] メールアドレス (Email Address): required, valid email format
- [ ] 電話番号 (Phone Number): optional, valid phone format (starts with 0, no hyphens, 10 to 11 digits) if provided
- [ ] お問い合わせ内容 (Enquiry Content): required, min 10 chars
- [ ] 添付ファイル (Attachment): optional, PDF/JPG/PNG only, max 5MB
- [ ] 利用規約 (ToS) section and checkbox: checkbox must be checked to submit

**Step 2.4:** Mark required fields in red

- [ ] Required fields visually marked

**Step 2.5:** Show error messages below each field, in Japanese

- [ ] Error messages implemented

**Step 2.6:** Disable submit button until all required fields are valid and ToS is agreed

- [ ] Button disables/enables correctly

**Step 2.7:** Auto-focus first invalid field on submit

- [ ] Auto-focus works as intended

**Step 2.8:** Use browser alert for confirmation

- [ ] Confirmation alert displays entered details (except file)

**Step 2.9:** Save submitted data to a JSON file in `public/` (file name and size only for attachment)

- [ ] Data saved correctly

**Step 2.10:** Reset form after submission

- [ ] Form resets

**Step 2.11:** Use ARIA attributes and roles for all interactive elements

- [ ] ARIA attributes present

**Step 2.12:** Use TailwindCSS (if installed) or scoped CSS for styling and responsiveness

- [ ] Responsive styles applied

**Step 2.13:** Use site's CSS variables for color and background

- [ ] Color variables used

**Step 2.14:** Ensure WCAG AA compliance (labels, ARIA, keyboard navigation, color contrast)

- [ ] Accessibility features present and functional

**Step 2.15:** Review UI for minimal, clean design

- [ ] UI matches minimal, clean design

---

## Phase 3: Subcomponents Implementation

**Step 3.1:** Create `FileUpload.vue` for file input, validation, and display (used in main form)

- [ ] FileUpload.vue created and integrated

**Step 3.2:** Create `ToSBox.vue` for scrollable ToS text and agreement checkbox (used in main form)

- [ ] ToSBox.vue created and integrated

**Step 3.3:** Ensure props/events work correctly between parent and child

- [ ] Props/events tested and working

**Step 3.4:** Validate accessibility features in subcomponents

- [ ] Validation and accessibility features preserved

---

## Phase 4: Testing

**Step 4.1:** Create unit tests in `src/components/__tests__/` for:

- [ ] Validation logic (Zod)
- [ ] Error display
- [ ] Accessibility (labels, ARIA, keyboard)
- [ ] Responsiveness (mobile/desktop)
- [ ] Submit flow and reset
- [ ] File upload validation
- [ ] ToS agreement logic

**Step 4.2:** Run all tests and check coverage

- [ ] All tests pass
- [ ] Coverage includes all major logic and UI/UX features

---

## Phase 5: Documentation

**Step 5.1:** Update README with usage instructions, accessibility, and responsiveness notes

- [ ] Documentation updated

**Step 5.2:** Review documentation for completeness and accuracy

- [ ] Documentation is clear, complete, and matches implementation

---

**All acceptance criteria for a phase must be met before moving to the next phase.**
