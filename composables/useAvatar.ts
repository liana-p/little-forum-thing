export async function useAvatar(
  avatar_path?: string | null
): Promise<string | false> {
  const supabase = useSupabaseClient();
  if (!avatar_path) {
    return false;
  }
  try {
    const { data, error } = await supabase.storage
      .from("avatars")
      .download(avatar_path);
    if (error) throw error;
    return URL.createObjectURL(data);
  } catch (error) {
    console.error("Error downloading image: ", error);
    return false;
  }
}
