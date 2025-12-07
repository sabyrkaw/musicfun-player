const TrackItem = ({ track, onSelect, isSelected }) => {
  const handleClick = () => onSelect?.(track.id)

  return (
    <li
      onClick={handleClick}
      style={{ border: `1px solid ${isSelected ? 'orange' : 'transparent'}` }}
    >
      <div>{track.attributes.title}</div>
      <audio
        src={track.attributes.attachments[0].url}
        controls
      ></audio>
    </li>
  )
}

export default TrackItem