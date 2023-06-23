import { supabase } from "./supabase";

export default async function getAllImageLink() {
    let imgLinkArr: string[] = [];
    const { data, error } = await supabase.storage.from("image").list("", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
    });
    if (error) {
        console.log(error);
        return;
    }
    data?.forEach(async (file) => {
        imgLinkArr.push(supabase.storage.from("image").getPublicUrl(file.name).data.publicUrl);
    });
    return imgLinkArr;
}