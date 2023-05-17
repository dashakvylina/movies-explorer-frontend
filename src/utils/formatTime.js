export const formatTime = (duration) => {
    return `${Math.trunc(duration / 60)}ч ${duration % 60}м`
}