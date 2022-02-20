<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UnionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $unions = [
            ['name' => 'Igbo Union'],
            ['name' => 'Hausa Union'],
            ['name' => 'Yoruba Union']
        ];
        collect($unions)->each(function($union) {
            \App\Models\Union::create([
                'union_name' => $union['name']
            ]);
        });
    }
}
