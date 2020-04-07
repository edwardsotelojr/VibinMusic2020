module BroadcastersHelper
  def getKey
    if logged_in? && Broadcaster.where(user_id: current_user.id).exists?
      broadcaster = Broadcaster.find_by(user_id: current_user.id)
      broadcastkey = broadcaster.broadcast_key
      return broadcastkey
    end
  end
end
