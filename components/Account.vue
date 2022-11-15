<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <AvatarEditor v-model:path="avatar_path" @upload="updateProfile" />
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled />
    </div>
    <div>
      <label for="username">Unique username</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="display_name">Display name</label>
      <input id="display_name" type="text" v-model="displayName" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="website" v-model="website" />
    </div>
    <div>
      <label for="description">Profile Description</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    <div>
      <label for="signature">Forum Signature</label>
      <textarea id="signature" v-model="signature"></textarea>
    </div>
    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">
        Sign Out
      </button>
    </div>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref("");
const displayName = ref("");
const website = ref("");
const description = ref("");
const signature = ref("");
const avatar_path = ref("");

loading.value = true;
const user = useSupabaseUser();
let { data } = await supabase
  .from("profiles")
  .select(`username, description, signature, display_name, website, avatar_url`)
  .eq("id", user.value.id)
  .single();
if (data) {
  username.value = data.username;
  description.value = data.description;
  signature.value = data.signature;
  displayName.value = data.display_name;
  website.value = data.website;
  avatar_path.value = data.avatar_url;
}
loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();
    const updates = {
      id: user.value.id,
      username: username.value,
      display_name: displayName.value,
      description: description.value,
      signature: signature.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };
    let { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>
