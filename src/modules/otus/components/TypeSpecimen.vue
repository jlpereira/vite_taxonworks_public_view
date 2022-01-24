<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">
        Type specimen
      </h1>
    </CardHeader>
    <CardContent>
      <ul class="text-sm">
        <li>
          Type locality: <span class="font-bold">{{ data.collecting_event.label }}</span>
        </li>
        <li>
          Kind of type: <span class="font-bold">{{ data.type }}</span>
        </li>
        <li>
          Specimen category: <span class="font-bold">{{ data.category }}</span>
        </li>
        <li>
          Repository: <span class="font-bold">{{ data.reposity.label }}</span>
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<script setup>

const data = {
  type: 'Syntype',
  category: 'male',
  collecting_event: {
    id: 123,
    label: 'Argentina, Tucumán, Lules, San Pablo',
  },
  reposity: {
    id: 123,
    label: 'Museo Regionale di Scienze Naturali'
  }
}
</script>