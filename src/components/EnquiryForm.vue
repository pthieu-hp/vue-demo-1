<script lang="ts">
export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  content: string;
  tos: boolean;
  attachment: { name: string; size: number } | null;
  timestamp: string;
}
</script>
<template>
  <form class="enquiry-form" @submit.prevent="handleSubmit">
    <!-- 名前 (Name) -->
    <div class="form-group">
      <label for="name" aria-required="true">名前 <span class="required-mark" aria-label="必須">（必要）</span></label>
      <input id="name" name="name" type="text" autocomplete="name" required aria-label="名前" aria-required="true" :aria-invalid="!!errors.name" v-model="form.name" @input="handleInputChange" />
      <div class="error-message" aria-live="polite" v-if="touched.name && errors.name">{{ errors.name }}</div>
    </div>
    <!-- メールアドレス (Email Address) -->
    <div class="form-group">
      <label for="email" aria-required="true">メールアドレス <span class="required-mark" aria-label="必須">（必要）</span></label>
      <input id="email" name="email" type="email" autocomplete="email" required aria-label="メールアドレス" aria-required="true" :aria-invalid="!!errors.email" v-model="form.email" @input="handleInputChange" />
      <div class="error-message" aria-live="polite" v-if="touched.email && errors.email">{{ errors.email }}</div>
    </div>
    <!-- 電話番号 (Phone Number) -->
    <div class="form-group">
      <label for="phone">電話番号</label>
      <input id="phone" name="phone" type="tel" autocomplete="tel" aria-label="電話番号" :aria-invalid="!!errors.phone" v-model="form.phone" @input="handleInputChange" />
      <div class="error-message" aria-live="polite" v-if="touched.phone && errors.phone">{{ errors.phone }}</div>
    </div>
    <!-- お問い合わせ内容 (Enquiry Content) -->
    <div class="form-group">
      <label for="content" aria-required="true">お問い合わせ内容 <span class="required-mark" aria-label="必須">（必要）</span></label>
      <textarea id="content" name="content" rows="4" required aria-label="お問い合わせ内容" aria-required="true" :aria-invalid="!!errors.content" v-model="form.content" @input="handleInputChange" style="resize: vertical;"></textarea>
      <div class="error-message" aria-live="polite" v-if="touched.content && errors.content">{{ errors.content }}</div>
    </div>
    <!-- 添付ファイル (Attachment) -->
    <div class="form-group">
      <label for="attachment">添付ファイル</label>
      <input id="attachment" name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png" aria-label="添付ファイル" :aria-invalid="!!errors.attachment" @change="handleFileChange" />
      <div class="error-message" aria-live="polite" v-if="touched.attachment && errors.attachment">{{ errors.attachment }}</div>
    </div>
    <!-- 利用規約 (ToS) -->
    <div class="form-group tos-group">
      <div class="tos-box" tabindex="0" aria-label="利用規約">
        <h3 style="font-weight: bold; font-size: 1.1em; margin-bottom: 0.5em;">利用規約（ダミー）</h3>
        <p>
          この利用規約はダミーテキストです。ご利用にあたっては、以下の内容をご確認ください。
          <br><br>
          第1条（目的）<br>
          本規約は、当サービスの利用条件を定めるものです。ユーザーは本規約に同意の上、サービスを利用するものとします。
          <br><br>
          第2条（禁止事項）<br>
          ユーザーは、法令または公序良俗に反する行為、他のユーザーや第三者の権利を侵害する行為を行ってはなりません。
          <br><br>
          第3条（免責事項）<br>
          当サービスは、提供する情報の正確性・完全性について一切の保証をしません。ユーザーは自己責任で利用してください。
          <br><br>
          第4条（変更・中止）<br>
          当サービスは、事前の通知なく内容の変更または中止を行う場合があります。
          <br><br>
          第5条（その他）<br>
          本規約の内容は、必要に応じて変更されることがあります。最新の規約をご確認ください。
          <br><br>
          以上、ダミー利用規約の全文です。スクロールして内容をご確認ください。
        </p>
      </div>
      <label aria-required="true">
        <input type="checkbox" name="tos" required aria-label="利用規約に同意" aria-required="true" :aria-invalid="!!errors.tos" v-model="form.tos" @change="handleToSChange" /> 利用規約に同意します <span class="required-mark" aria-label="必須">（必要）</span>
      </label>
      <div class="error-message" aria-live="polite" v-if="touched.tos && errors.tos">{{ errors.tos }}</div>
    </div>
    <!-- Submit Button -->
    <button type="submit" class="submit-btn" :disabled="!isFormValid">送信</button>
    <button type="button" class="submit-btn" style="margin-top:1rem;" @click="downloadAllEnquiries">全件ダウンロード</button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2, "2文字以上で入力してください").max(50, "50文字以内で入力してください"),
  email: z.email({ message: "有効なメールアドレスを入力してください" }),
  phone: z
    .string()
    .optional()
    .refine((val: string | undefined) => !val || /^0\d{9,10}$/.test(val), { message: "電話番号は0で始まり、10〜11桁の数字のみ（ハイフンなし）で入力してください" }),
  content: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
  attachment: z
    .object({
      name: z.string(),
      size: z.number().max(5 * 1024 * 1024, "ファイルサイズは5MB以下にしてください"),
      type: z.enum(["application/pdf", "image/jpeg", "image/png"], { message: "PDF、JPG、PNG形式のファイルのみアップロードできます" }),
    })
    .optional(),
  tos: z.literal(true, { message: "利用規約に同意してください" }),
});

type FormFields = {
  name: string;
  email: string;
  phone: string;
  content: string;
  attachment: File | null;
  tos: boolean;
  [key: string]: string | File | boolean | null;
};

type ErrorFields = {
  name: string;
  email: string;
  phone: string;
  content: string;
  attachment: string;
  tos: string;
  [key: string]: string;
};

const form: FormFields = reactive({
  name: "",
  email: "",
  phone: "",
  content: "",
  attachment: null,
  tos: false,
});

const errors: ErrorFields = reactive({
  name: "",
  email: "",
  phone: "",
  content: "",
  attachment: "",
  tos: "",
});

const touched: { [key: string]: boolean } = reactive({
  name: false,
  email: false,
  phone: false,
  content: false,
  attachment: false,
  tos: false,
});

const ENQUIRIES_KEY = "enquiries";

const validateForm = () => {
  let attachmentValue: undefined | { name: string; size: number; type: string };
  if (form.attachment) {
    attachmentValue = {
      name: form.attachment.name,
      size: form.attachment.size,
      type: form.attachment.type,
    };
  }
  const result = enquirySchema.safeParse({
    ...form,
    attachment: attachmentValue,
  });
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });
  if (!result.success) {
    for (const issue of result.error.issues) {
      const key = typeof issue.path[0] === "string" ? issue.path[0] : "";
      if (key && key in errors) {
        errors[key] = issue.message;
      }
    }
  }
  return result.success;
};

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  if (target.name in form) {
    form[target.name] = target.value;
    touched[target.name] = true;
    validateForm();
  }
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  form.attachment = target.files?.[0] ?? null;
  touched.attachment = true;
  validateForm();
};

const handleToSChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  form.tos = target.checked;
  touched.tos = true;
  validateForm();
};

const isFormValid = computed(() => {
  // Check for errors
  const hasErrors = Object.values(errors).some((err) => !!err);
  // Check required fields
  const requiredFieldsFilled = form.name && form.email && form.content && form.tos;
  return !hasErrors && !!requiredFieldsFilled;
});

const saveEnquiryData = () => {
  const data: EnquiryData = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    content: form.content,
    tos: form.tos,
    attachment: form.attachment
      ? { name: form.attachment.name, size: form.attachment.size }
      : null,
    timestamp: new Date().toISOString(),
  };
  // Get existing array from localStorage
  const existing = localStorage.getItem(ENQUIRIES_KEY);
  let arr: EnquiryData[] = [];
  if (existing) {
    try {
      arr = JSON.parse(existing);
    } catch {
      arr = [];
    }
  }
  arr.push(data);
  localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(arr));
};

const downloadAllEnquiries = () => {
  const existing = localStorage.getItem(ENQUIRIES_KEY);
  const arr = existing ? existing : "[]";
  const blob = new Blob([arr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "enquiries.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.content = "";
  form.attachment = null;
  form.tos = false;
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });
  Object.keys(touched).forEach((key) => {
    touched[key] = false;
  });
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const valid = validateForm();
  if (valid) {
    // Step 2.8: Show confirmation alert (except file)
    const details = `【確認内容】\n\n` +
      `名前: ${form.name}\n` +
      `メールアドレス: ${form.email}\n` +
      `電話番号: ${form.phone || "(未入力)"}\n` +
      `お問い合わせ内容: ${form.content}\n` +
      `利用規約同意: ${form.tos ? "はい" : "いいえ"}`;
    window.alert(details);
    saveEnquiryData();
    resetForm();
    return;
  }
  // Mark all fields as touched so errors show
  Object.keys(touched).forEach((key) => {
    touched[key] = true;
  });
  // Auto-focus first invalid field
  for (const key of Object.keys(errors)) {
    if (errors[key]) {
      const el = document.querySelector(`[name="${key}"]`);
      if (el && typeof (el as HTMLElement).focus === "function") {
        (el as HTMLElement).focus();
      }
      break;
    }
  }
};


</script>

<style scoped>
.enquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1rem;
  background: var(--color-background, #f9f9f9);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
@media (max-width: 600px) {
  .enquiry-form {
    padding: 0.5rem;
    max-width: 100%;
  }
  .form-group {
    gap: 0.25rem;
  }
  .submit-btn {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem 0;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.required-mark {
  color: var(--color-error);
  font-weight: 500;
  font-size: 0.95em;
  margin-left: 0.25em;
}
.error-message {
  color: var(--color-error);
  font-size: 0.95rem;
  min-height: 1.2em;
}
input,
textarea {
  background: var(--color-input-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}
textarea {
  resize: vertical;
}
input:focus,
textarea:focus {
  outline: 2px solid var(--color-error);
  border-color: var(--color-error);
}
.tos-group {
  margin-top: 1.5rem;
}
.tos-box {
  max-height: 120px;
  overflow-y: auto;
  background: var(--color-background, #f9f9f9);
  border: 1px solid var(--color-border, #ddd);
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}
.submit-btn {
  background: var(--color-text, #333);
  color: #fff;
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
  opacity: 0.6;
  transition: opacity 0.2s;
}
.submit-btn:enabled {
  cursor: pointer;
  opacity: 1;
}
</style>
