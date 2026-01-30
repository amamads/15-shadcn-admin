import ChatsSidebar from '../components/organisms/ChatsSidebar'
import MessageBox from '../components/organisms/MessageBox'

export const Chats = () => {
  return (
    <div className='flex'>
      <ChatsSidebar/>
      <MessageBox/>
    </div>
  )
}
