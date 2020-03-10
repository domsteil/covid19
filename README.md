# covid19
covid19 case web app, network and deep learning model

The problem with the current numbers and analytics is there are multiple CSV files with poor versioning.
There is different formats, numbers of columns and it is difficult for people to report cases themselves. 
The web app allows individual users to submit cases to the network if they believe they are experiencing symptons.
The case is created on the network and sent to the main Corona Virus Case Network.

The Case will use a shared structured format:

```jsx

@BelongsToContract(CaseContract::class)
data class Case(val caseId: UUID,
                val caseName: String,
                val caseNumber: String,
                val summary: String,
                val province: String,
                val country: String,
                val latitude: String,
                val longitude: String,
                val date: java.util.Date,
                val caseReference: Case,
                val caseStatus: CaseStatus,
                val casePriority: CasePriority,
                val submitter: Party,
                val processor: Party,
                override val linearId: 
```

Messages can be sent on the network in structured format:

```jsx
@BelongsToContract(MessageContract::class)
data class Message(val id: UniqueIdentifier,
                   val body: String,
                   val fromUserId: String,
                   val to: Party,
                   val from: Party,
                   val toUserId: String,
                   val sentReceipt: Boolean?,
                   val deliveredReceipt: Boolean?,
                   val fromMe: Boolean,
                   val time: String?,
                   val messageNumber: String,
                   override val linearId: UniqueIdentifier = UniqueIdentifier())
```

Better data from the distributed network can exported and to use the tabular Case data for Deep Learning and Analytics. Find out faster where cases are emerging. Where to quarantine. Case References can also be used.
