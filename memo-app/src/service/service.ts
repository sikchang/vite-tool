import gsap from "gsap";
import { renderMemo, type MemoData } from "../card"
import { main } from "../main"
import type { Tables } from "../supabase/database.types";
// import type { Database, Tables } from "../supabase/database.types";
import { supabase } from "../supabase/supabase"



export async function fetchMemo() {

    const{data, error} = await supabase.from('memo').select();

    main.innerHTML = '';
    // let a:Database['public']['Tables']['memo']['Row'] 예전에 이렇게 불러왔음
    // let a:Tables<'memo'>['priority'] 현재 방식
    data && data.forEach((d) => {
            renderMemo(main,d)
        })
   
    

}


export async function deleteMemo(id:Number) {
    const response = await supabase
    .from('memo')
    .delete()   
    .eq('id', Number(id))
    .select()

    fetchMemo()

}

export async function insertMemo({
    title,
    description,
    priority
}: Pick<Tables<'memo'>,'title' | 'description' | 'priority'>) {
    
    const { error } = await supabase.from('memo').insert({
        title,
        description,
        priority,
    })
    // 데이터 다시 로드
    fetchMemo()

    const tl = gsap.timeline()
    .to('.pop',{y:'100%',ease:'power3.inOut'})
    .to('#dialog',{autoAlpha:0,duration:0.2})
}
















