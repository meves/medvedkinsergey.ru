export const writeUrl = (page: string, count: string) => {
    history.pushState(null, '', `${process.env.url_admin_clientMessages}?page=${page}&count=${count}`)
}