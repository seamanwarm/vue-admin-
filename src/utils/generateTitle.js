//router.meta.title，在breadcrumb侧边栏tagsView中使用
export function generateTitle(tittle){
    const hasKey =  this.$te("route"+title)
    if (hasKey){
        
        const translatedTitle = this.$t("route" + title)
        
        return translatedTitle
    }
    return title
}