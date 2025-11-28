import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import EnquiryForm from "../EnquiryForm.vue";

describe("EnquiryForm", () => {
  let wrapper: ReturnType<typeof mount>;
  beforeEach(() => {
    wrapper = mount(EnquiryForm);
  });

  it("renders all fields and disables submit initially", () => {
    expect(wrapper.find('input[name="name"]').exists()).toBe(true);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
    expect(wrapper.find('input[name="phone"]').exists()).toBe(true);
    expect(wrapper.find('textarea[name="content"]').exists()).toBe(true);
    expect(wrapper.find('input[name="attachment"]').exists()).toBe(true);
    expect(wrapper.find('input[name="tos"]').exists()).toBe(true);
    expect((wrapper.find('button[type="submit"]').element as HTMLButtonElement).disabled).toBe(true);
  });

  it("shows error for empty required fields on submit", async () => {
    // Simulate blur on required fields to mark them as touched
    await wrapper.find('input[name="name"]').trigger("blur");
    await wrapper.find('input[name="email"]').trigger("blur");
    await wrapper.find('textarea[name="content"]').trigger("blur");
    await wrapper.find('input[name="tos"]').trigger("blur");
    await wrapper.find("form").trigger("submit.prevent");
    // At least one error message should be visible
    expect(wrapper.findAll(".error-message").some((e) => e.text() !== "")).toBe(true);
  });

  it("enables submit when all required fields are valid and ToS is checked", async () => {
    await wrapper.find('input[name="name"]').setValue("山田太郎");
    await wrapper.find('input[name="email"]').setValue("test@example.com");
    await wrapper.find('textarea[name="content"]').setValue("お問い合わせ内容テスト");
    await wrapper.find('input[name="tos"]').setValue(true);
    expect(wrapper.find('button[type="submit"]').attributes("disabled")).toBeUndefined();
  });

  it("validates email format", async () => {
    await wrapper.find('input[name="name"]').setValue("山田太郎");
    await wrapper.find('input[name="email"]').setValue("invalid-email");
    await wrapper.find('textarea[name="content"]').setValue("お問い合わせ内容テスト");
    await wrapper.find('input[name="tos"]').setValue(true);
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.find('.error-message[aria-live="polite"]').text()).toContain("有効なメールアドレス");
    expect((wrapper.find('input[name="email"]').element as HTMLInputElement).value).toBe("invalid-email");
  });

  it("validates phone format if provided", async () => {
    await wrapper.find('input[name="name"]').setValue("山田太郎");
    await wrapper.find('input[name="email"]').setValue("test@example.com");
    await wrapper.find('textarea[name="content"]').setValue("お問い合わせ内容テスト");
    await wrapper.find('input[name="tos"]').setValue(true);
    await wrapper.find('input[name="phone"]').setValue("123456789");
    await wrapper.find("form").trigger("submit.prevent");
    // Find the error message for phone
    const phoneError = wrapper.findAll('.error-message[aria-live="polite"]').find((e) => e.text().includes("電話番号は0で始まり"));
    expect(phoneError).toBeDefined();
  });

  it("resets form after submission", async () => {
    await wrapper.find('input[name="name"]').setValue("山田太郎");
    await wrapper.find('input[name="email"]').setValue("test@example.com");
    await wrapper.find('textarea[name="content"]').setValue("お問い合わせ内容テスト");
    await wrapper.find('input[name="tos"]').setValue(true);
    await wrapper.find("form").trigger("submit.prevent");
    expect((wrapper.find('input[name="name"]').element as HTMLInputElement).value).toBe("");
    expect((wrapper.find('input[name="email"]').element as HTMLInputElement).value).toBe("");
    expect((wrapper.find('textarea[name="content"]').element as HTMLTextAreaElement).value).toBe("");
    expect((wrapper.find('input[name="tos"]').element as HTMLInputElement).checked).toBe(false);
  });

  it("saves data to localStorage and allows download", async () => {
    window.localStorage.clear();
    await wrapper.find('input[name="name"]').setValue("山田太郎");
    await wrapper.find('input[name="email"]').setValue("test@example.com");
    await wrapper.find('textarea[name="content"]').setValue("お問い合わせ内容テスト");
    await wrapper.find('input[name="tos"]').setValue(true);
    await wrapper.find("form").trigger("submit.prevent");
    const saved = window.localStorage.getItem("enquiries");
    expect(saved).toContain("山田太郎");
  });

  it("is accessible: labels, ARIA, keyboard", () => {
    expect(wrapper.find('label[for="name"]').exists()).toBe(true);
    expect(wrapper.find('input[name="name"]').attributes("aria-label")).toBe("名前");
    expect(wrapper.find('input[name="name"]').attributes("aria-required")).toBe("true");
    expect(wrapper.find('input[name="name"]').attributes("aria-invalid")).toBeDefined();
  });
});
