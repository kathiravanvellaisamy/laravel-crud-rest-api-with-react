<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Http\Resources\v1\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(){
        $skillWithPaginate = Skill::all();
        $skills = SkillResource::collection($skillWithPaginate);
        return response()->json([
            'status' => true,
            'data' => $skills
        ]);
    }

    public function store(StoreSkillRequest $request){
            $skill = Skill::create($request->validated());
            return response()->json([
            'status' => true,
            'message' => "Skill has been added...",
            'data' => $skill
        ]);
    }
    public function update(UpdateSkillRequest $request,Skill $skill){
        $skill->update($request->validated());
        return response()->json([
            'status' => true,
            'message' => "Skill has been Updated...",
            'data' => $skill
        ]);
    }
    public function show(Skill $skill){
        return new SkillResource($skill);
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();

        return response()->json([
            'status' => true,
            'message' => "Skill has been Deleted...",
        ]);
    }
}
