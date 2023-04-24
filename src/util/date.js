import {format, register} from 'timeago.js'
import Korean from 'timeago.js/lib/lang/ko'

register('ko',Korean)

export function formatTimeAgo (date, lang = 'en_US') {
  return format(date, lang)
}