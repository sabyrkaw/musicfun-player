type AttachmentDto = {
  url: string
}

type TrackListItemOutputAttributes = {
  title: string,
  attachments: AttachmentDto[]
}

export type TrackListItemOutput = {
  id: string,
  attributes: TrackListItemOutputAttributes
}

type Props = {
  isSelected: boolean
  onSelect: (trackId: string) => void
  track: TrackListItemOutput
}

const TrackItem = ({ track, onSelect, isSelected }: Props) => {
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