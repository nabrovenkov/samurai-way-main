type NewComponentPropsType = {
  students: Array<StudentType>
}

type StudentType = {
  id: number
  name: string
  age: number
}

// export const NewComponent = (props: NewComponentPropsType) => {
//   console.log(props.students)
//   return (
//     <ul>
//       {props.students.map((objectFromStudentArray, index) => {
//         return (
// 					<li key={objectFromStudentArray.id}>
// 						<span>{objectFromStudentArray.name}</span>
// 						<span> age: {objectFromStudentArray.age}</span>
// 					</li>
// 				)
//       })}
//       <li></li>
//       <li></li>
//     </ul>
//   )
// }

export const NewComponent = (props: NewComponentPropsType) => {
  return (
		<table>
			<thead>
				<tr>
					<th>The table header</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>The table body</td>
					<td>with two columns</td>
				</tr>
			</tbody>
		</table>
	)
}