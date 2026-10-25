import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
  Ticket,
  Trash2,
} from 'lucide-react'

export const ChevronLeftIcon = (props) => <ChevronLeft size={20} strokeWidth={1.5} {...props} />
export const ChevronRightIcon = (props) => <ChevronRight size={20} strokeWidth={1.5} {...props} />
export const TrashIcon = (props) => <Trash2 size={22} strokeWidth={1.5} {...props} />
export const VoucherIcon = (props) => <Ticket size={22} strokeWidth={1.5} {...props} />
export const ChatIcon = (props) => <MessageSquareText size={18} strokeWidth={2} {...props} />
export const CheckIcon = (props) => <Check size={14} strokeWidth={3} {...props} />