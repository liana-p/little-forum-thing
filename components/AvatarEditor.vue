<template>
  <div>
    <img
      v-if="path"
      :src="path"
      alt="Avatar"
      class="avatar image"
      style="width: 10em; height: 10em"
    />
    <div
      v-else
      class="avatar no-image"
      :style="{ height: size, width: size }"
    />

    <div style="width: 10em; position: relative">
      <label class="button primary block" for="single">
        {{ uploading ? "Uploading ..." : "Upload" }}
      </label>
      <input
        style="position: absolute; visibility: hidden"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { uniqueId } from "lodash";
import { v4 as uuidv4 } from "uuid";

const size = ref("200px");
const props = defineProps(["path"]);
const { path } = toRefs(props);

const emit = defineEmits(["update:path", "upload"]);

const supabase = useSupabaseClient();

const uploading = ref(false);
const files = ref();

const uploadAvatar = async (event: any) => {
  files.value = event.target.files;
  try {
    uploading.value = true;
    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const filePath = `${uuidv4()}.${fileExt}`;
    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);
    console.log(filePath);
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
    emit("update:path", data.publicUrl);
    console.log(data);
    emit("upload");
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  } finally {
    uploading.value = false;
  }
};
</script>
